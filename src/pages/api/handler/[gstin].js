export default async function handler(req, res){
    
    //getting client secrets from .env.local
    const gst_client = process.env.GST_CLIENT_ID;
    const gst_secret = process.env.GST_AUTHORIZATION_TOKEN;

    //getting the gst number from the request from frontend
    const gstnum = req.query.gstin;
    console.log(typeof req.query);

    //setting the options for the fetch request
    const options = {
        method : 'GET',
        headers: {
            'Authorization': 'Bearer 0ab31ef7392227173c6e8d34195e86d5eb0da1e9',
            'client_id': 'JarZChUcsytSBbnkpt',  
        }
    }

    //fetch route
    const url = `https://commonapi.mastersindia.co/commonapis/searchgstin?gstin=${gstnum}`;
    
    try{
        //fetch request
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        return res.end(JSON.stringify(data));
    }catch(e){
        console.log(e);
        return res.end(JSON.stringify({'error': e.message}));
    }
    
}