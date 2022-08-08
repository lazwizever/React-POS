import {Component} from "react";
import Grid from "@mui/material/Grid";
import {Autocomplete, TextField, Typography} from "@mui/material";
import GDSEButton from "../../../component/common/Button/button";
import DatePicker from "../../../component/common/DatePicker";


class CartManage extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(

            <Grid style={{width:'100vw',height:'100vh',overflow:'hidden'}}>

                <Typography style={{fontSize: '34px', fontWeight: 'unset', marginTop: '3vh', marginLeft: '2vw'}}>
                   Cart Manage
                </Typography>

                <Grid style={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexDirection: "column",
                    flexWrap: 'wrap',
                    width: "86vw",
                    backgroundColor: '#eeeff1',
                    height: "25vh",
                    marginLeft: '2vw',
                    marginTop: '4vh'
                }}>

                    <Grid margin='1vh'
                          style={{display: "flex", justifyContent: "space-around", flexDirection: "row"}}>
                        <Autocomplete size='small' style={{width: '23vw'}}

                                      onChange={(e, value, r) => {


                                      }}
                                      getOptionLabel={
                                          (option) => option.type
                                      }
                                      id="controllable-states"

                            /* value={this.state.formData.freeMileAge.dailyMileage}

                             options={this.state.vehicleTypes}*/
                                      sx={{m: 1, width: '35ch'}}
                                      renderInput={(params) => <TextField {...params} label="User Name"/>}
                        />

                            {/*<DatePicker label ="Pick-Up-Date"

                            />*/}
                        <TextField id="outlined-basic" style={{width: '15vw'}} size='small' label="Date"
                                   variant="outlined"/>

                    </Grid>

                    <Grid margin='1vh'
                          style={{display: "flex", justifyContent: "space-around", flexDirection: "row"}}>

                        <Autocomplete size='small' style={{width: '23vw'}}

                                      onChange={(e, value, r) => {


                                      }}
                                      getOptionLabel={
                                          (option) => option.type
                                      }
                                      id="controllable-states"

                            /* value={this.state.formData.freeMileAge.dailyMileage}

                             options={this.state.vehicleTypes}*/
                                      sx={{m: 1, width: '35ch'}}
                                      renderInput={(params) => <TextField {...params} label="Product Title"/>}
                        />
                        <TextField id="outlined-basic" style={{width: '15vw'}} size='small' label="Qty"
                                   variant="outlined"/>

                    </Grid>

                </Grid>

                <Grid style={{width:'11vw',height:'4.5vh',display:'flex',justifyContent:'space-between',marginLeft:'77vw',marginTop:"24vh"}}>

                    <GDSEButton color='success' variant="contained" sx={{m: 0.5, mt: 4}}
                                style={{color: "white", width: '5vw'}} type={'submit'}>
                        Save
                    </GDSEButton>

                    <GDSEButton color='error' variant="contained" sx={{m: 0.5, mt: 4}}
                                style={{color: "white", width: '5vw'}} type={'submit'}>
                        Cancel
                    </GDSEButton>
                </Grid>



            </Grid>


        )
    }


}
export default CartManage