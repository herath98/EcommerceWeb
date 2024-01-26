import { useContext } from 'react';
import { Card, Layout, ProductDetail } from '../components';
import { Context } from '../context';
import { GoToTop } from '../utils';
import { Typography, TextField } from '@mui/material'; // Material-UI components

export const HomePage = () => {

    const context = useContext(Context);
    GoToTop();

    const renderView = () => {
        if (context.filteredItems?.length > 0) {
            return (
                context.filteredItems?.map((item) => (
                    <Card key={item.id} item={item} />
                ))
            )
        } else {
            return (
                <p>No results found 😣</p>
            )
        }

    }


    //console.log(filteredItems)

    // const [items, setItems] = useState(null);
    // useEffect(() => {
    //     fetch('https://api.escuelajs.co/api/v1/products')
    //         .then(resp => resp.json())
    //         .then(data => setItems(data))
    // }, []);

    return (
        <Layout>
            <Typography sx={{color:'lightskyblue',fontFamily:'fantasy'}} variant="h1" className="mb-5 font-bold text-4xl">
                MegaMarketHub
            </Typography>

            <form className="w-1/2 mb-8">
                <TextField
                    type="text"
                    label="Search product item..."
                    variant="outlined"
                    className="w-full p-3"
                    onChange={(e) => context.setSearchByTitle(e.target.value)}
                />
            </form>
           
            <div style={{margin:'1rem',padding:'1rem'}} className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                {
                    renderView()
                }
            </div>
            
            <ProductDetail />
        </Layout>
    )
};