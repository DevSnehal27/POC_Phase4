import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Select, MenuItem } from "@material-ui/core";
import Checkbox from "@mui/material/Checkbox";


import { handleSelection1, updateSelectionForCases } from '../Controller/pwController'
import { CircularProgress } from "@mui/material";
import { useState } from "react";

import {
  ExpansionPanelDetailsStyle, GridTopStyle, containerGridstyle, GridItemStyle, outside_labelpriorityStyle,
  TextFieldSchmaStyle, PatternTextfliedsNamesRur, PatternTextFieldInputProps
} from '../../DashboardPage_UI/UICommonStyles'


const PatternWizard = ({ handleChangepanel,
  drawPallet_1_2,
  expanded_panel,
  t,
  color1,
  handleSelection,
  G_listForOutsideLabelPrior,
  G_tempLabelindex,
  S_HWeightedSymmetric,
  selectedOne,
  S_HWeighted1,
  S_HWeighted2,
  S_VWeighted1,
  S_VWeighted2,
  S_setVariantName_SchemaA,
  S_setVariantName_SchemaB,
  S_setVariantName_SchemaC,
  S_outside_Label_Priority,
  G_outsideLabelPrior,
  G_outside_Label_Priority,
  S1_outside_Label_Priority,
  clearingSchemaFields,
  firstCaseOriginChangeFlush,
  S_colorA,
  S_colorB,
  S_colorC,
  handlecolorA,
  handlecolorB,
  handlecolorC,
  callSchemaDropdown,
  reOrderingSwiperIndex,
  disableAlgoPW,
  updatePallet,
  swiperRef,
  backgroundColor
}) => {
  const [circular, setCircular] = useState('hidden')

  const showProgress = (ms) => {
    setCircular('visible')
    setTimeout(() => {
      setCircular('hidden')
    }, ms);
  }

  return (
    <>

      <Grid item xs={12} style={GridTopStyle} >
        <ExpansionPanel style={ExpansionPanelDetailsStyle}
          expanded={expanded_panel === 'panel3'}
          onChange={handleChangepanel('panel3')}
        // onClick={this.callSchema}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon style={{backgroundColor}} />}
            id="panel1-header"
          >
            <Typography>{t('patternWizard')}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container style={containerGridstyle} >
              <Grid item xs={12} style={GridItemStyle}>
                <TextField
                  id="outside_labelpriority"
                  label=""
                  defaultValue={t('outsideLabelPriority')}
                  // className={classes.textField}
                  margin="dense" style={{ height: 27, width: "200px" }}
                  InputProps={{
                    readOnly: true,
                    disableUnderline: true,
                    style: { fontSize: 12, left: "10px", bottom: "2px", top: "2px", padding: 1 }
                  }}
                  variant="standard"
                  size="small"
                />
                {selectedOne
                  ?
                  <TextField
                    style={outside_labelpriorityStyle}
                    // id="outlined-type"
                    id="outside_labelpriority"
                    value={S_outside_Label_Priority == "null" ? "NA" : S_outside_Label_Priority}
                    // value={this.state.selectcase}
                    onChange={(e) => handleSelection1(
                      "outsideLabelPriority",
                      e,
                      clearingSchemaFields,
                      firstCaseOriginChangeFlush,
                      G_outsideLabelPrior,
                      G_outside_Label_Priority,
                      S1_outside_Label_Priority,
                      S_colorA,
                      S_colorB,
                      S_colorC,
                      handlecolorA,
                      handlecolorB,
                      handlecolorC,
                      callSchemaDropdown,
                      reOrderingSwiperIndex,
                      disableAlgoPW,
                      swiperRef
                    )}
                    onBlur={(e) => updateSelectionForCases(e, updatePallet)}
                    select
                    // className={classes.textField3}
                    InputLabelProps={{
                      shrink: true,
                      style: { fontSize: "12px", }
                    }}
                    InputProps={{
                      style: { fontSize: "12px", }
                    }}
                    margin="dense"
                    //  style={{ height: 38,marginLeft:50 }}
                    variant="outlined"
                    size="small">

                    {G_listForOutsideLabelPrior.map((value, index) => {

                      // if(value!=="null_null"){
                      const lastIndex = value.lastIndexOf("_")
                      var firstPart = value.substring(0, lastIndex)
                      const lastPart = value.substring(lastIndex + 1)

                      if (firstPart == "null") {
                        firstPart = "NA"
                      }
                      return <MenuItem id="dropDown-type" onClick={(e) => {
                        G_tempLabelindex = index
                        showProgress(3000);
                      }
                      } value={value}>{firstPart}</MenuItem>;
                    }
                      // }
                    )
                    }

                  </TextField>
                  :
                  <TextField
                    style={outside_labelpriorityStyle}
                    // id="outlined-type"
                    id="outside_labelpriority"
                    value={S_outside_Label_Priority == "null" ? "NA" : S_outside_Label_Priority}
                    // value={this.state.selectcase}
                    onChange={(e) => handleSelection1(
                      "outsideLabelPriority",
                      e,
                      clearingSchemaFields,
                      firstCaseOriginChangeFlush,
                      G_outsideLabelPrior,
                      G_outside_Label_Priority,
                      S1_outside_Label_Priority,
                      S_colorA,
                      S_colorB,
                      S_colorC,
                      handlecolorA,
                      handlecolorB,
                      handlecolorC,
                      callSchemaDropdown,
                      reOrderingSwiperIndex,
                      disableAlgoPW,
                      swiperRef
                    )}
                    onBlur={(e) => updateSelectionForCases(e, updatePallet)}
                    select
                    // className={classes.textField3}
                    InputLabelProps={{
                      shrink: true,
                      style: { fontSize: "12px", }
                    }}
                    InputProps={{
                      style: { fontSize: "12px", }
                    }}
                    margin="dense"
                    //  style={{ height: 38,marginLeft:50 }}
                    variant="outlined"
                    size="small">

                    {G_listForOutsideLabelPrior.map((value, index) => {
                      // if(value!=="null_null"){
                      const lastIndex = value.lastIndexOf("_")
                      var firstPart = value.substring(0, lastIndex)
                      const lastPart = value.substring(lastIndex + 1)

                      if (firstPart == "null") {
                        firstPart = "NA"
                      }
                      return <MenuItem id="dropDown-type" onClick={(e) => {
                        G_tempLabelindex = index
                        showProgress(3000)
                      }
                      } value={value}>{firstPart}</MenuItem>
                      // } 
                    })}
                    {/* {this.state.casenames.map((value, index) => {
                    return <MenuItem value={value}>{value}</MenuItem>;
                  })} */}
                  </TextField>
                }
              </Grid>
              {/* <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', padding: 0, backgroundColor: color1, marginBottom: "4px" }}>
                      <TextField
                        id="outlined-read-only-input"
                        label=""
                        defaultValue={t('ruleSymetricMassDistribution')}
                        // className={classes.textField}
                        margin="dense" style={{ height: 38, width: 200 }}
                        InputProps={{
                          readOnly: true,
                          disableUnderline: true,
                          style: { fontSize: 12, padding: 10 }
                        }}
                        variant="standard"
                        size="small"
                      />
                      <Checkbox
                        className="checkbox"
                        style={{ marginLeft: "200px" }}
                        sx={{
                          color: "grey",
                          '&.Mui-checked': {
                            color: "rgb(0,125,129)",
                          },
                        }}
                        onChange={this.handleSelection("Mass Distribution")}
                        checked={this.state.ruleSymetricMassDistribution}
                        onBlur={this.updateSelection}
                      />
                    </Grid> */}
              <Grid item xs={12} style={GridItemStyle}>
                <TextField
                  id="outlined-read-only-input"
                  label=""
                  defaultValue={t('ruleHorizontalSymmetricMassDistribution')}
                  // className={classes.textField}
                  margin="dense" style={{ height: 27, width: "74%" }}
                  InputProps={{
                    readOnly: true,
                    disableUnderline: true,
                    style: PatternTextfliedsNamesRur
                  }}
                  variant="standard"
                  size="small"
                />
                <Checkbox
                  className="checkbox"
                  style={{ left: "55px", width: "18px", height: "18px", top: "15px" }}
                  disabled={S_HWeightedSymmetric}
                  sx={{
                    color: "grey",
                    '&.Mui-checked': {
                      color: "rgb(0,125,129)",
                    },
                  }}
                  onChange={handleSelection("HWeighted")}
                  checked={selectedOne ? S_HWeighted1 : S_HWeighted2}
                  onBlur={(e) => updateSelectionForCases(e, updatePallet)}
                />
              </Grid>

              <Grid item xs={12} style={GridItemStyle}>
                <TextField
                  id="outlined-read-only-input"
                  label=""
                  defaultValue={t('ruleVerticalSymmetricMassDistribution')}
                  // className={classes.textField}
                  margin="dense" style={{ height: 27, width: "74%" }}
                  InputProps={{
                    readOnly: true,
                    disableUnderline: true,
                    style: PatternTextfliedsNamesRur
                  }}
                  variant="standard"
                  size="small"
                />
                <Checkbox
                  className="checkbox"
                  style={{ left: "55px", width: "18px", height: "18px", top: "15px" }}
                  disabled={S_HWeightedSymmetric}
                  sx={{
                    color: "grey",
                    '&.Mui-checked': {
                      color: "rgb(0,125,129)",
                    },
                  }}
                  onChange={handleSelection("VWeighted")}
                  checked={selectedOne ? S_VWeighted1 : S_VWeighted2}
                  onBlur={(e) => updateSelectionForCases(e, updatePallet)}
                />
              </Grid>

              <Grid item xs={12} style={GridItemStyle}>
                <TextField
                  id="outlined-read-only-input"
                  label=""
                  defaultValue="Mirror Holizontal"
                  // className={classes.textField}
                  margin="dense" style={{ height: 27, width: "74%" }}
                  InputProps={{
                    readOnly: true,
                    disableUnderline: true,
                    style: PatternTextfliedsNamesRur
                  }}
                  variant="standard"
                  size="small"
                />
                <Checkbox
                  className="checkbox"
                  style={{ left: "55px", width: "18px", height: "18px", top: "15px" }}
                  disabled={S_HWeightedSymmetric}
                  sx={{
                    color: "grey",
                    '&.Mui-checked': {
                      color: "rgb(0,125,129)",
                    },
                  }}
                  onChange={handleSelection("HWeighted")}
                  checked={selectedOne ? S_HWeighted1 : S_HWeighted2}
                  onBlur={(e) => updateSelectionForCases(e, updatePallet)}
                />
              </Grid>

              <Grid item xs={12} style={GridItemStyle}>
                <TextField
                  id="outlined-read-only-input"
                  label=""
                  defaultValue="Mirror Vertical"
                  // className={classes.textField}
                  margin="dense" style={{ height: 27, width: "74%" }}
                  InputProps={{
                    readOnly: true,
                    disableUnderline: true,
                    style: PatternTextfliedsNamesRur
                  }}
                  variant="standard"
                  size="small"
                />
                <Checkbox
                  className="checkbox"
                  style={{ left: "55px", width: "18px", height: "18px", top: "15px" }}
                  disabled={S_HWeightedSymmetric}
                  sx={{
                    color: "grey",
                    '&.Mui-checked': {
                      color: "rgb(0,125,129)",
                    },
                  }}
                  onChange={handleSelection("HWeighted")}
                  checked={selectedOne ? S_HWeighted1 : S_HWeighted2}
                  onBlur={(e) => updateSelectionForCases(e, updatePallet)}
                />
              </Grid>

              <Grid item xs={12} style={GridItemStyle}>
                <TextField
                  id="outlined-read-only-input"
                  label=""
                  defaultValue= "Rotate 180"
                  // className={classes.textField}
                  margin="dense" style={{ height: 27, width: "74%" }}
                  InputProps={{
                    readOnly: true,
                    disableUnderline: true,
                    style: PatternTextfliedsNamesRur
                  }}
                  variant="standard"
                  size="small"
                />
                <Checkbox
                  className="checkbox"
                  style={{ left: "55px", width: "18px", height: "18px", top: "15px" }}
                  disabled={S_HWeightedSymmetric}
                  sx={{
                    color: "grey",
                    '&.Mui-checked': {
                      color: "rgb(0,125,129)",
                    },
                  }}
                  onChange={handleSelection("HWeighted")}
                  checked={selectedOne ? S_HWeighted1 : S_HWeighted2}
                  onBlur={(e) => updateSelectionForCases(e, updatePallet)}
                />
              </Grid>

              <Grid item xs={12} style={GridItemStyle}>
                <TextField
                  id="outlined-read-only-input"
                  label=""
                  defaultValue={t('schemaA')}
                  // className={classes.textField}
                  margin="dense" style={{ height: 27 }}
                  InputProps={{
                    readOnly: true,
                    disableUnderline: true,
                    style: PatternTextfliedsNamesRur
                  }}
                  variant="standard"
                  size="small"
                />
                <TextField
                  style={TextFieldSchmaStyle}
                  id="outlined-read-only-inputSchemaA"
                  defaultValue=""
                  value={S_setVariantName_SchemaA}
                  // onChange = {this.handleCarouselUpdate}
                  onBlur={(e) => updateSelectionForCases(e, updatePallet)}
                  disabled={true}
                  // disabled="true"
                  InputLabelProps={{
                    shrink: true,
                    style: PatternTextFieldInputProps,
                  }}
                  InputProps={{
                    style: PatternTextFieldInputProps,
                    disableUnderline: true
                  }}
                  margin="dense"
                  //  style={{ height: 27 ,marginLeft:150}}
                  variant="outlined"
                  size="small"
                />


              </Grid>
              <Grid item xs={12} style={GridItemStyle}>
                <TextField
                  id="outlined-read-only-input"
                  label=""
                  defaultValue={t('schemaB')}
                  // className={classes.textField}
                  margin="dense" style={{ height: 27 }}
                  InputProps={{
                    readOnly: true,
                    disableUnderline: true,
                    style: PatternTextfliedsNamesRur
                  }}
                  variant="standard"
                  size="small"
                />
                <TextField
                  style={TextFieldSchmaStyle}
                  id="outlined-read-only-inputSchemaB"
                  defaultValue=""
                  value={S_setVariantName_SchemaB}
                  // onChange = {this.handleCarouselUpdate}
                  onBlur={(e) => updateSelectionForCases(e, updatePallet)}
                  disabled={true}
                  // disabled="true"
                  InputLabelProps={{
                    shrink: true,
                    style: PatternTextFieldInputProps,
                  }}
                  InputProps={{
                    style: PatternTextFieldInputProps,
                    disableUnderline: true
                  }}
                  margin="dense"
                  // style={{ height: 38 ,marginLeft:150}}
                  variant="outlined"
                  size="small"
                />



              </Grid>
              <Grid item xs={12} style={GridItemStyle}>
                <TextField
                  id="outlined-read-only-input"
                  label=""
                  defaultValue={t('schemaC')}
                  // className={classes.textField}
                  margin="dense" style={{ height: 27 }}
                  InputProps={{
                    readOnly: true,
                    disableUnderline: true,
                    style: PatternTextfliedsNamesRur
                  }}
                  variant="standard"
                  size="small"
                />
                <TextField
                  style={TextFieldSchmaStyle}
                  id="outlined-read-only-inputSchemaC"
                  defaultValue=""
                  value={S_setVariantName_SchemaC}
                  // onChange = {this.handleCarouselUpdate}
                  onBlur={(e) => updateSelectionForCases(e, updatePallet)}
                  disabled={true}
                  // disabled="true"
                  InputLabelProps={{
                    shrink: true,
                    style: PatternTextFieldInputProps,
                  }}
                  InputProps={{
                    style: PatternTextFieldInputProps,
                    disableUnderline: true
                  }}
                  margin="dense"
                  // style={{ height: 38 ,marginLeft:150}}
                  variant="outlined"
                  size="small"
                />



              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Grid>

      <div className="parent-blur" style={{ zIndex: 5, justifyContent: "center", alignItems: "center", display: circular == "visible" ? "flex" : "none", position: "fixed", width: '100%', height: '100%', marginTop: "-607px", marginLeft: "-840px", opacity: '0.4', backgroundColor: "black" }}>
        <CircularProgress
          style={{
            // backgroundColor: 'yellow',
            // className:'div.third',
            // opacity:'0.4',
            width: "100px",
            height: "100px",
            color: "#5eb8b3",
            visibility: circular,
          }}
        />
      </div>

    </>
  );
}


export default PatternWizard;