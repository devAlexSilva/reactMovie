import {apiKey, apiBase} from '../../lib/configTmdb';

export default async (req, res) => {
    
    const resp = await fetch(`${apiBase}/search/movie?api_key=${apiKey}&language=pt-br&query=${req.query.q}`);
    const json = await resp.json();

    res.status(200).json({
        list: json.results 
    });
}