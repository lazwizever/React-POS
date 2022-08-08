import {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheets} from "./productManageStyle";
import Grid from "@mui/material/Grid";
import {Autocomplete, Card, CardActions, CardContent, TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import GDSEButton from "../../../component/common/Button/button";


class ProductManage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {classes} = this.props;
        return (

            <Grid className={classes.productContainer}>

                <Typography style={{fontSize: '34px', fontWeight: 'unset', marginTop: '3vh', marginLeft: '2vw'}}>
                    Product Manage
                </Typography>


                <Grid style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: "column",
                    width: '50vw',
                    height: '9vh',
                    marginLeft: '24vw',
                    justifyContent: 'space-between',
                    marginTop: '6vh'
                }}>

                    <Grid style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: "row",
                        justifyContent: 'space-between'
                    }}>
                        <TextField id="outlined-basic" style={{width: '23vw'}} size='small' label="Title"
                                   variant="outlined"/>
                        <TextField id="outlined-basic" style={{width: '23vw'}} size='small' label="Price"
                                   variant="outlined"/>
                    </Grid>
                </Grid>


                <Grid style={{marginTop: '1vh', marginLeft: '23.5vw'}}>
                    <Autocomplete size='small' style={{width: '23vw'}}

                                  onChange={(e, value, r) => {
                                      let formData = this.state.formData

                                      formData.vehicleType = value.type
                                      this.setState({formData})

                                  }}
                                  getOptionLabel={
                                      (option) => option.type
                                  }
                                  id="controllable-states"

                        /* value={this.state.formData.freeMileAge.dailyMileage}

                         options={this.state.vehicleTypes}*/
                                  sx={{m: 1, width: '35ch'}}
                                  renderInput={(params) => <TextField {...params} label="Vehicle Type"/>}
                    />
                </Grid>

                <Grid>

                    <Card style={{
                        width: '23vw',
                        marginTop: '-5vh',
                        height: "20vh",
                        marginLeft: '51vw',
                        backgroundColor: "#eeeff1"
                    }}>
                        <CardContent>
                            <Typography>Description</Typography>

                        </CardContent>
                        <CardActions style={{display: 'flex', justifyContent: 'center'}}>
                        </CardActions>
                    </Card>


                </Grid>

                <Grid>
                    <div  style={{
                        marginLeft:"24vw",
                        marginTop:"15vh",
                        height: '20vh',
                        border: '1px solid black',
                        //backgroundImage:"url(" +this.state.frontView+ ")",
                        backgroundSize: 'cover',
                        width : '20vh',
                        backgroundColor : 'white',

                    }}/>
                </Grid>

                <Grid>
                    <div><input

                        style={{display: 'none'}}
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file01"
                        multiple
                        type="file"
                        onChange={(e) => {
                            this.setState({
                                frontImage: e.target.files[0],
                                frontView : URL.createObjectURL(e.target.files[0])
                            })
                        }}
                    />
                        <label htmlFor="contained-button-file01">
                            <Button style={{marginLeft:"36vw",marginTop:'-6vh'}} variant="outlined" color="primary" size="medium" component="span">
                                Choose Image
                            </Button>
                        </label>

                    </div>
                </Grid>

                <Grid style={{width:'11vw',height:'4.5vh',display:'flex',justifyContent:'space-between',marginLeft:'63vw',marginTop:"-6.5vh"}}>

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

export default withStyles(styleSheets)(ProductManage)