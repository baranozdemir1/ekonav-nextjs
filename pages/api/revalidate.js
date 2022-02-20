export default async function revalidate(req, res){
    console.log('BODY', req.body);
    console.log('QUERY', req.query);
    
    try {
        const res = await fetch('https://ekonav-nextjs.vercel.app/');
        
        console.log('RES', res.status);
        console.log('HTML', (await res.text()).length);
        
        if (!res.ok) {
            throw new Error(`Request failed with ${res.status}`);
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
    res.end()
}