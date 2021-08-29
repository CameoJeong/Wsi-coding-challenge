import axios from 'axios'

const getProductList = async(key='girl') => {
    const res = await axios.get('https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json', {
        headers: {
            'Content-Type': 'application/json',
            'mode':'cors',
            'Access-Control-Allow-Origin': '*',
        },
    })

    return res
}

export {
    getProductList,
}
