import {Component} from "react";
import Grid from "@mui/material/Grid";
import {withStyles} from "@mui/styles";
import GDSEButton from "../../../component/common/Button/button";
import {Typography} from "@mui/material";
import ResponsiveAppBar from "../../../component/common/appBar/appBarIndex";
import productManagerService from "../../../service/productManagerService";
import cartManagerService from "../../../service/cartManagerService";
import signUpService from "../../../service/signUpService";



class DashBoardPage extends Component{

    constructor(props) {
        super(props);

        this.state={

            allUsers:[],
            allCarts:[],
            allProducts:[],
        }

    }

    loadDashboard = async () => {

        let res = await productManagerService.fetchProduct();
        let res1 = await cartManagerService.fetchCart();
        let res2 = await signUpService.fetchCustomers();

        if (res.status === 200 && res1.status === 200 && res2.status === 200){
            this.setState({
                allProducts : res.data,
                allCarts : res1.data,
                allUsers : res2.data,
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            //this.clearFields();
            //await this.loadData();
        } else {
            this.setState({
                alert: true,
                message: res.response.data.message,
                severity: 'error'
            });
        }
    };


    componentDidMount() {
        this.loadDashboard();
    }


    render() {
        const {classes} = this.props;
        return(

            <Grid style={{width:"100vw",height:'100vh'}}>

                <ResponsiveAppBar/>


                <Grid style={{display:"flex",justifyContent:"space-between",flexDirection:"row",width:'80vw',marginTop:"20vh",marginLeft:"10vw"}}>

                    <Grid style={{backgroundColor:"#40739e",height:'15vw',width:"24vw",display:"flex",flexDirection:'column'}}>

                        <Grid style={{width:'24vw',height:"10vh",backgroundColor:"#718093",display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Grid style={{margin:"2vh",display:'flex',flexDirection:"column",alignItems:'center',justifyContent:"space-between"}}>
                                <Typography style={{fontSize:"50px",color:"white"}}>Product</Typography>
                            </Grid>
                        </Grid>


                        <Grid style={{margin:"3vh",display:'flex',flexDirection:"column",alignItems:'center',justifyContent:"space-between"}}>
                            <Typography style={{fontSize:"60px",color:"white"}}>{this.state.allProducts.length}</Typography>
                        </Grid>


                    </Grid>

                    <Grid style={{backgroundColor:"#40739e",height:'15vw',width:"24vw",display:"flex",flexDirection:'column'}}>
                        <Grid style={{width:'24vw',height:"10vh",backgroundColor:"#718093",display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Grid style={{margin:"2vh",display:'flex',flexDirection:"column",alignItems:'center',justifyContent:"space-between"}}>
                                <Typography style={{fontSize:"50px",color:"white"}}>Cart</Typography>
                            </Grid>
                        </Grid>

                        <Grid style={{margin:"3vh",display:'flex',flexDirection:"column",alignItems:'center',justifyContent:"space-between"}}>
                            <Typography style={{fontSize:"60px",color:"white"}}>{this.state.allCarts.length}</Typography>
                        </Grid>
                    </Grid>



                    <Grid style={{backgroundColor:"#40739e",height:'15vw',width:"24vw",display:"flex",flexDirection:'column'}}>
                        <Grid style={{width:'24vw',height:"10vh",backgroundColor:"#718093",display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Grid style={{margin:"2vh",display:'flex',flexDirection:"column",alignItems:'center',justifyContent:"space-between"}}>
                                <Typography style={{fontSize:"50px",color:"white"}}>Users</Typography>
                            </Grid>
                        </Grid>

                        <Grid style={{margin:"3vh",display:'flex',flexDirection:"column",alignItems:'center',justifyContent:"space-between"}}>
                            <Typography style={{fontSize:"60px",color:"white"}}>{this.state.allUsers.length}</Typography>
                        </Grid>
                    </Grid>

                </Grid>





            </Grid>

        )
    }
}
export default DashBoardPage