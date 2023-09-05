import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {MenuItem } from "@material-ui/core";
import Checkbox from "@mui/material/Checkbox";
import { toast } from 'material-react-toastify';

import { handleSelectionLayerPallet, handleSelectionIntLayer } from "../Controller/lcController";
import {ExpansionPanelDetailsStyle,GridTopStyle, GridItemStyle, containerGridstyle} from '../../DashboardPage_UI/UICommonStyles'
import { useEffect, useState } from "react";


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const LayerCreator = ({

    handleChangepanel,
    handleChangepanel_forToast,
    expanded_panel,
    layerGrid,
    G_typeoptions6,

    S_cases_Schema_A,
    S_cases_Schema_B,
    S_cases_Schema_C,

    S_setVariantName_SchemaA,
    S_setVariantName_SchemaB,
    S_setVariantName_SchemaC,

    t,
    color1,
    obj,

    G_layerdata,
    G_intermediate_layer,
    G_layer_name,
    G_layer_sequence,
    S_palletid,
    S_layer_data,
    S1_layer_data,
    S_algo_loaded,
    backgroundColor,
    S_WA_1_Height_Z_Dir,
    countOfIntermediateLayer,
    value_IntermediateLayerType,
    value_CaseType,
    value_LayerCreator



}) => {
    const [minLayer,setMinLayers]=useState(false)
    const [chk,setChk]=useState(false)
    console.log(obj,"obj")
    console.log(value_CaseType,"value_CaseType")
    console.log(G_layerdata,"G_layerdata")
    console.log(G_intermediate_layer,"G_intermediate_layer")
    console.log(G_layer_name,"G_layer_name")
    console.log(G_layer_sequence,"G_layer_sequence")
    console.log(S_palletid,"S_palletid")
    console.log(S_layer_data,"S_layer_data")
    console.log(S_WA_1_Height_Z_Dir,"S_WA_1_Height_Z_Dir")
    if(value_CaseType != null){
        var height=value_CaseType.split("_")
    }
    else{
        var height=0
    }
    
  
    
    console.log(height)
    //console.log(height[3])
    let countOfIntermediateLayer1=0
    let c=0
    G_layerdata.filter((count)=>{
    if(count.intermediatelayer){
      c++
     countOfIntermediateLayer1=c
    //   this.setState({
    //     countOfIntermediateLayer:c
    //   })
    }
  })

    console.log(countOfIntermediateLayer,"countOfIntermediateLayer")
    console.log(countOfIntermediateLayer1,"countOfIntermediateLayer1")
    console.log(value_IntermediateLayerType,"value_IntermediateLayerType")
    const maxLayers=(S_WA_1_Height_Z_Dir/height[3])
    console.log(maxLayers,"maxLayers")
    var minLayers=((value_LayerCreator*height[3])+((countOfIntermediateLayer1/2)*value_IntermediateLayerType))
    console.log(minLayers,"minLayers")
    var limit=(S_WA_1_Height_Z_Dir-(height[3]*value_LayerCreator))/value_IntermediateLayerType
    console.log(limit,"limit")
    if(minLayer==true && (S_WA_1_Height_Z_Dir < minLayers)){
        // setChk(true)
        console.log("yesss")
        toast.error(t(`Limit exceeds, Please decrease the layers or you can choose only ${limit} `), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
        setMinLayers(false)
        setChk(false)
        return
    }
    if(minLayer==true && (S_WA_1_Height_Z_Dir == minLayers)){
        setChk(true)
        console.log("brabarrrr")
        toast.error(t(`You reached the maximum height,You can not add more than ${limit} intermediatelayers `), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
        setMinLayers(false)
        return
    }
    console.log(minLayer,"minLayers")

    const limitExceed=()=>{
         setMinLayers(true)
    console.log(minLayer,"minLayers")
    }
    const ha=()=>{
        // toast.error(t(`khatam`), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
        toast.error(t(`You have to remove 1 intermediate layer for selecting another one`), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
        setChk(false)
    }

    const haaa=()=>{
        // toast.error(t(`khatam`), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
        toast.warn(t(`You can not add more than ${limit} intermediatelayers `), { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
        // setChk(false)
    }
    return (

        <Grid item xs={12}style={GridTopStyle} >
            <ExpansionPanel style={ExpansionPanelDetailsStyle}
                expanded={expanded_panel === 'panel4'}
                onChange={S_algo_loaded == true ? handleChangepanel('panel4') : handleChangepanel_forToast('panel4')}
            // onClick={this.drawPallet_1_2}
            >
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon style={{backgroundColor}}
                        //  style={{backgroundColor: expanded_panel ? 'green' : '#f5f5f5',}}
                     />}
                    id="panel1-header"
                >
                    <Typography>{t('layerCreator')}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid
                        container
                        style={containerGridstyle}
                    >
                        <Grid
                            item
                            xs={12}
                            style={GridItemStyle}
                            onClick={() => {
                                if (chk==true) {
                                    ha();
                                }
                            }}
                        >
                            <TextField
                                id="outlined-read-only-input"
                                label=""
                                defaultValue={t('intermediateLayer')}
                                // className={classes.textField}
                                margin="dense"
                                style={{ height: 27, width: "42%" }}
                                InputProps={{
                                    readOnly: true,
                                    disableUnderline: true,
                                    style: { fontSize: 12, left: "10px", bottom: "2px", top: "5px", padding: 1 }
                                }}
                                variant="standard"
                                size="small"
                                onClick={()=>{
                                    console.log("hiii")
                                }}
                            />
                            <Checkbox
                                className="checkbox"
                                style={{ left: "211px", width:"18px", height:"18px", top:"16px" }}
                                {...label}
                                checked={obj.length > 0 ? obj[0]?.intermediatelayer : true}
                                // checked={
                                //     chk === true
                                //         ? obj.length > 0
                                //             ? obj[0]?.intermediatelayer
                                //             : true
                                //         : obj.length > 0
                                //         ? obj[0]?.intermediatelayer
                                //         : false
                                // }
                                disabled={chk === true}
                                sx={{
                                    color: "grey",
                                    '&.Mui-checked': {
                                      color: "rgb(0,125,129)",
                                    },
                                  }}
                               
                                onChange={
                                    // limitExceed()
                                    handleSelectionIntLayer({
                                    name: "intermediatelayer", 
                                    value: 0,
                                    G_layerdata,
                                    G_intermediate_layer,
                                    G_layer_name,
                                    G_layer_sequence,
                                    S_palletid,
                                    S1_layer_data,
                                })
                               }
                                onBlur={
                                    layerGrid}

                                    // onClick={()=>limitExceed()}
                                    onClick={() => {
                                        if (chk==false) {
                                            limitExceed();
                                        }
                                    }}
                               
                            />
                        </Grid>
                        {/* {[...Array(this.state.layer_data.length)].map( */}
                        {S_layer_data.length > 0 && [...Array(S_layer_data.length - 1)].map(
                            // (console.log(""))
                            (value, index) => {
                                console.log(
                                    " array1 " + S_layer_data.length
                                  );
                                return (
                                    <>

                                        <Grid
                                            item
                                            xs={12}
                                            style={GridItemStyle}
                                        >


                                            <TextField
                                                id="outlined-read-only-input"
                                                label=""
                                                value={t('layer') + " " + (index + 1)}
                                                // className={classes.textField}
                                                margin="dense"
                                                style={{ height: 27 }}
                                                InputProps={{
                                                    readOnly: true,
                                                    disableUnderline: true,
                                                    style: { fontSize: 12, left: "10px", bottom: "2px", width: "95%", top: "5px", padding: 1 }
                                                }}
                                                variant="standard"
                                                size="small"
                                            />
                                            <TextField
                                                style={{ border: "1px solid white !important", top: "10px", left: "72px", padding: "0px", margin: "0px", width: "42%", backgroundColor:"white", paddingLeft:"6px", height:"27px" }}
                                                id="outlined-typelayername"
                                                value={obj[index + 1].layername}
                                                onChange={handleSelectionLayerPallet({
                                                    name: "layername", 
                                                    value: index + 1,
                                                    G_layerdata,
                                                    G_layer_name,
                                                    G_layer_sequence,
                                                    S_palletid,
                                                    S_layer_data,
                                                    S1_layer_data,
                                                })}
                                                onBlur={layerGrid}
                                                select
                                                // className={classes.textField3}
                                                InputLabelProps={{
                                                    shrink: true,
                                                    style: { fontSize: "12px", top:"2.5px" },
                                                }}
                                                InputProps={{
                                                    style: { fontSize: "12px", top:"2.5px" },
                                                }}
                                                margin="dense"
                                                // style={{ height: 38 ,marginLeft:110}}
                                                variant="outlined"
                                                size="small"
                                            >
                                                {G_typeoptions6.filter((value, i) => {
                                                    if (value == "Schema A") {
                                                        if (S_cases_Schema_A == 0 || S_setVariantName_SchemaA == "") {
                                                            return false;
                                                        } else {
                                                            return true;
                                                        }
                                                    }
                                                    if (value == "Schema B") {
                                                        if (S_cases_Schema_B == 0 || S_setVariantName_SchemaB == "") {
                                                            return false;
                                                        } else {
                                                            return true;
                                                        }
                                                    }
                                                    if (value == "Schema C") {
                                                        if (S_cases_Schema_C == 0 || S_setVariantName_SchemaC == "") {
                                                            return false;
                                                        } else {
                                                            return true;
                                                        }
                                                    }

                                                }).map(
                                                    (value, index) => {
                                                        return (
                                                            <MenuItem value={value}>
                                                                {value}
                                                            </MenuItem>
                                                        );
                                                    }
                                                )}
                                            </TextField>
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            style={GridItemStyle}
                                            onClick={() => {
                                                if (chk==true) {
                                                    ha();
                                                }
                                            }}
                                        >
                                            <TextField
                                                id="outlined-read-only-input"
                                                label=""
                                                defaultValue={t('intermediateLayer')}
                                                // className={classes.textField}
                                                margin="dense"
                                                style={{ height: 27, width: "42%px" }}
                                                InputProps={{
                                                    readOnly: true,
                                                    disableUnderline: true,
                                                    style: { fontSize: 12, left: "10px", bottom: "2px", top: "4px", padding: 1 }
                                                }}
                                                variant="standard"
                                                size="small"
                                            />
                                            <Checkbox
                                                className="checkbox"
                                                // style={{ marginLeft: "124px" }}
                                                // {...label}
                                                style={{ left: "262px", width:"18px", height:"18px", top:"16px" }}
                                                {...label}
                                                checked={obj[index + 1].intermediatelayer}
                                                // checked={
                                                //     chk === true
                                                //         ? obj[index + 1].intermediatelayer
                                                //         : false
                                                // }
                                                disabled={chk === true}
                                                sx={{
                                                    color: "grey",
                                                    '&.Mui-checked': {
                                                      color: "rgb(0,125,129)",
                                                    },
                                                  }}
                                                onChange={handleSelectionIntLayer({
                                                    name: "intermediatelayer", 
                                                    value: index + 1,
                                                    G_layerdata,
                                                    G_intermediate_layer,
                                                    G_layer_name,
                                                    G_layer_sequence,
                                                    S_palletid,
                                                    S1_layer_data,
                                                })}
                                                onBlur={layerGrid}
                                                // onClick={()=>limitExceed()}
                                                onClick={() => {
                                                    if (chk==false) {
                                                        limitExceed();
                                                    }
                                                }}
                                            />
                                        </Grid>
                                    </>
                                );
                            }
                        )}

                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </Grid>

    );
}

export default LayerCreator;
