export default function array(req, res) {
    res.status(200).json({
        params: req.query
    })    
}