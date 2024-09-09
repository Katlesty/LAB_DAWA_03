import {Router} from 'express'

const router = Router();

//PRODUCTOS
//--------LISTADO --------------------------------------------//
router.get('/products', async(req, res) => {
    try {
        res.render('productos/list');
    }
    catch(err) {
        res.status(500).json({message: err.message});
    }
});

//--------AÑADIR --------------------------------------------//

router.get('/products/add', (req, res) => {
    res.render('productos/add');
});

router.post('products/add', async(req, res) => {
    try {
        res.redirect('/products');
    }
    catch(err) {
        res.status(500).json({message: err.message});
    }
});

//--------ACTUALIZAR --------------------------------------------//

router.get('/products/edit', (req, res) => {
    res.render('productos/edit');
});

router.post('products/edit', async(req, res) => {
    try {
        res.redirect('/products');
    }
    catch(err) {
        res.status(500).json({message: err.message});
    }
});

export default router;