export default async function handler(req, res){
    
    //getting client secrets from .env.local
    const gst_client = process.env.GST_CLIENT_ID;
    const gst_secret = process.env.GST_AUTHORIZATION_TOKEN;

    //getting the gst number from the request from frontend
    const num = req.query.number;
    let url = null;
    //setting the options for the fetch request
    const options = {
        method : 'GET',
        headers: {
            'Authorization': gst_secret,
            'client_id': gst_client  
        }
    }

    if(num.length > 10)
    {
        url = `https://commonapi.mastersindia.co/commonapis/searchgstin?gstin=${num}`;
    } 
    else{
        url = `https://commonapi.mastersindia.co/commonapis/searchpan?pan=${num}`;
    }
    
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