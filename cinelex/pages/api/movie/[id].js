import {apiKey, apiBase} from '../../../lib/configTmdb';

export default async (req, res) => {

    const resp = await fetch(`${apiBase}/movie/${req.query.id}?api_key=${apiKey}&language=pt-br`);
    const json = await resp.json();

    res.status(200).json({
        list: json
    });
}