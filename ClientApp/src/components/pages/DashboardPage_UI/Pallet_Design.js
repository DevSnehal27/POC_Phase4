

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Select, MenuItem } from "@material-ui/core";
import { RadioGroup, Radio } from "@material-ui/core";
import FormControl from "@mui/material/FormControl";
import { FormGroup, FormControlLabel } from "@mui/material";
import Box from "@mui/material/Box";

import {
    containerGridstyle, GridStyle, TextFieldStyle, PDropdown, ImportDataStyle, NamesTextFlied, EditTextFlied, DeleteStyle,
    ExportTextFlied, RadioButtonStyle, EditRadioStyle, Radiostyle, AddTextflied, importradio, ExportRadio, EdittRadio, Deleteradio
} from './UICommonStyles';


const handleClick = (e) => {
    e.preventDefault();
  };
  
const PalletDesign = ({

    expanded_panel,
    handlexpand,
    S_operation,
    executeUserActionPallet,
    classes,
    S_item1,
    palletcharallow,
    role,
    S_selectpallet,
    handleSelectionPallet,
    S_PalletRename,
    handleSelectionPalletRename,
    S_PalletSaveAs,
    handleSelectionPalletSaveAS,
    S_casepallet,
    ImporthandleSelectionForPalletFile,
    S_imprtData2,
    S_palletnames,

    t,
    color1,


}) => {
    return (

        <Grid item xs={12} style={{ marginTop: "7px" }}>
            <ExpansionPanel
                style={{
                    boxShadow: "none",
                    width: "512px",
                    backgroundColor: "#f5f5f5",
                }}
                expanded={expanded_panel === "panel3"}
                onChange={(event) => handlexpand("panel3", event)}
            >
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    id="panel2-header"
                >
                    <Typography id="service2">{t("palletDesign")}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid
                        container
                        style={containerGridstyle}

                    >
                        <Grid
                            item
                            xs={12}
                            style={GridStyle}

                        >
                            <RadioGroup
                                name="source"
                                value={S_operation}
                                onChange={(e) =>
                                    executeUserActionPallet(e.target.value)
                                }
                                inputProps={{ size: "small" }}
                                row
                            >

                                <div
                                    style={
                                        Radiostyle
                                    }
                                    className={classes.textField}
                                >
                                    <span
                                        style={NamesTextFlied}
                                    >
                                        {t("addPallet")}
                                    </span>
                                </div>
                                <TextField
                                    style={
                                        AddTextflied
                                    }
                                    placeholder=""
                                    id="#pallet_name"
                                    value={S_item1}
                                    inputProps={{ maxLength: 32 }}
                                    onChange={palletcharallow}
                                    type="text"
                                    InputLabelProps={{
                                        shrink: true,
                                        style: { fontSize: 12, top: "3px" },
                                    }}
                                    InputProps={{
                                        disableUnderline: true,
                                        style: { fontSize: 12, top: "3px" },
                                    }}
                                    disabled={role === "guest"}
                                    margin="dense"
                                    variant="outlined"
                                    size="small"
                                />
                                <FormControlLabel
                                    value="addPallet"
                                    control={
                                        <Radio
                                            style={{ left: "224px", bottom: "35px", width: "18px", height: "18px" }}
                                        />
                                    }
                                    labelPlacement="start"
                                    label={<Box component="div" fontSize={2}></Box>}
                                    classes={classes.radioLabel}
                                    disabled={role === "guest"}
                                />
                            </RadioGroup>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            style={GridStyle}

                        >

                            <div
                                style={Radiostyle}
                                className={classes.textField}
                            >
                                <span
                                    style={NamesTextFlied}
                                >
                                    {t("selectPallet")}
                                </span>
                            </div>
                            <TextField
                                style={PDropdown}
                                id="outlined-typeselectPallet"
                                value={S_selectpallet}
                                onChange={handleSelectionPallet}
                                select
                                className={classes.textField5}
                                InputLabelProps={{
                                    shrink: true,

                                }}
                                InputProps={{
                                    style: { fontSize: "12px", bottom: "2px", top: "2px", height: "27px" },
                                }}
                                disabled={role === "guest"}
                                margin="dense"
                                variant="outlined"
                                size="small"
                            >
                                {S_palletnames.map(({ id, value }) => {
                                    if (role !== 'admin' && id === 462) {
                                        return null; // Skip rendering this MenuItem
                                    }
                                    return (
                                        <MenuItem key={id} value={id}>
                                            {value}
                                        </MenuItem>
                                    );
                                })}
                            </TextField>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            style={GridStyle}

                        >
                            <RadioGroup
                                name="source"
                                value={S_operation}
                                onChange={(e) =>
                                    executeUserActionPallet(e.target.value)
                                }
                                inputProps={{ size: "small" }}
                                row
                            >
                                <div
                                    style={{
                                        fontSize: 12,
                                        height: 27,
                                        marginTop: "17px",
                                        minWidth: "130px",
                                    }}
                                    className={classes.textField}
                                >
                                    <span
                                        style={NamesTextFlied}
                                    >
                                        {t("rename")}
                                    </span>
                                </div>
                                <TextField
                                    style={{ bottom: "1px", top: "-41px", height: "27px", left: "215px", width: "77%", backgroundColor: "white" }}

                                    placeholder=""
                                    id="outlined-textcase1rename"
                                    inputProps={{ maxLength: 32 }}
                                    value={S_PalletRename}
                                    onChange={handleSelectionPalletRename}
                                    type="text"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,

                                    }}
                                    InputProps={{
                                        disableUnderline: true,
                                        style: { fontSize: "12px", top: "3px" },
                                    }}
                                    disabled={role === "guest"}
                                    margin="dense"
                                    variant="outlined"
                                    size="small"
                                />
                                <FormControlLabel
                                    value="RenamePallet"
                                    control={
                                        <Radio
                                            style={RadioButtonStyle}
                                        />
                                    }
                                    labelPlacement="start"
                                    label={<Box component="div" fontSize={2}></Box>}
                                    classes={classes.radioLabel}
                                    disabled={role === "guest"}
                                />
                            </RadioGroup>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            style={GridStyle}

                        >
                            <RadioGroup
                                name="source"
                                value={S_operation}
                                onChange={(e) =>
                                    executeUserActionPallet(e.target.value)
                                }
                                inputProps={{ size: "small" }}
                                row
                            >
                                <div
                                    style={
                                        Radiostyle
                                    }
                                    className={classes.textField}
                                >
                                    <span
                                        style={NamesTextFlied}
                                    >
                                        {t("saveAs")}
                                    </span>
                                </div>
                                <TextField
                                    style={{ bottom: "1px", top: "-42px", height: "27px", left: "214px", width: "59.4%", border: "1px solid white !important", backgroundColor: "white", }}

                                    placeholder=""
                                    id="outlined-textcase1saveAs"
                                    inputProps={{ maxLength: 32 }}
                                    value={S_PalletSaveAs}
                                    onChange={handleSelectionPalletSaveAS}
                                    type="text"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,

                                    }}
                                    InputProps={{
                                        disableUnderline: true,
                                        style: { fontSize: "12px", top: "3px" },
                                    }}
                                    disabled={role === "guest"}
                                    margin="dense"
                                    variant="outlined"
                                    size="small"
                                />
                                <FormControlLabel
                                    value="SaveAsPallet"
                                    control={
                                        <Radio
                                            style={RadioButtonStyle}
                                        />
                                    }
                                    labelPlacement="start"
                                    label={<Box component="div" fontSize={2}></Box>}
                                    classes={classes.radioLabel}
                                    disabled={role === "guest"}
                                />
                            </RadioGroup>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            style={GridStyle}

                        >
                            <RadioGroup
                                name="source"
                                value={S_operation}
                                onChange={(e) =>
                                    executeUserActionPallet(e.target.value)
                                }
                                row
                            >
                                <FormControlLabel
                                    value="editPallet"
                                    style={EditRadioStyle}
                                    control={
                                        <Radio
                                            style={{ marginTop: "8px", marginLeft: "-2px", width: "18px", height: "18px", marginBottom: "8px" }}
                                            id="edit-pallet1"
                                        />
                                    }
                                    labelPlacement="start"
                                    label={
                                        <Box
                                            component="div"
                                            style={{ width: "110px", fontSize: "12px !important",userSelect: "none", marginTop: "12px", marginLeft: "-12px", marginBottom: "10px", lineHeight: "1", lineBreak: "auto", }}
                                            fontsize={12}
                                        >
                                            {t("editPallet")}
                                        </Box>
                                    }
                                    onClick={handleClick}
                                    classes={classes.radioLabel}
                                    disabled={
                                        role === "guest" ||
                                        S_selectpallet === ""
                                    }
                                />
                                <FormControlLabel
                                    style={EditRadioStyle}
                                    value="deletePallet"
                                    control={
                                        <Radio
                                            style={{ marginTop: "9px", marginLeft: "19px", width: "18px", height: "18px", marginBottom: "9px" }}
                                        />
                                    }
                                    labelPlacement="start"
                                    label={
                                        <Box
                                            component="div"
                                            style={{ width: "100px", fontSize: "12px !important",userSelect: "none", marginTop: "11px", marginLeft: "64px", lineBreak: "auto", lineHeight: "1", marginBottom: "9px" }}
                                            fontsize={12}
                                        >
                                            {t("deletePallet")}
                                        </Box>
                                    }
                                    onClick={handleClick}
                                    classes={classes.radioLabel}
                                    disabled={
                                        role === "guest" ||
                                        S_selectpallet === ""
                                    }
                                />
                                <FormControlLabel
                                    style={{
                                        marginTop: "5px",
                                        left: "-12px",
                                        bottom: "8px",
                                    }}
                                    value="exportPalletData"
                                    control={
                                        <Radio
                                            style={{
                                                marginTop: "14px",
                                                left: "-3px",
                                                bottom: "6px",
                                                width: "18px",
                                                height: "18px"
                                            }}
                                        />
                                    }
                                    labelPlacement="start"

                                    label={
                                        <Box
                                            component="div"
                                            style={{ width: "129px", fontSize: "12px !important",userSelect: "none", marginTop: "7px", marginLeft: "68px", marginBottom: "4px", lineBreak: "auto", lineHeight: 1, }}
                                            fontsize={12}
                                        >
                                            {t("exportPalletData")}
                                        </Box>
                                    }
                                    onClick={handleClick}
                                    classes={classes.radioLabel}
                                    disabled={
                                        role === "guest" ||
                                        S_selectpallet === ""
                                    }
                                />
                            </RadioGroup>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            style={GridStyle}

                        >
                            <div
                                style={Radiostyle}
                                className={classes.textField}
                            >
                                <span
                                    style={NamesTextFlied}
                                >
                                    {t("importData")}
                                </span>
                            </div>
                            <TextField
                                style={{ border: "1px solid white !important", width: "100.2%", top: "3px", height: "27px", left: "1px", backgroundColor: "white", paddingLeft: "4px" }}
                                id="outlined-typeimportDatapallete"
                                select
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={S_casepallet}
                                onChange={ImporthandleSelectionForPalletFile}
                                InputProps={{
                                    style: { fontSize: "12px", bottom: "2px", top: "2px", height: "27px" },
                                }}
                                disabled={role === "guest"}
                                margin="dense"
                                variant="outlined"
                                size="small"
                            >

                                {Array.isArray(S_imprtData2) && S_imprtData2.length !== 0 ?
                                    (S_imprtData2.map((value, index) =>
                                        (<MenuItem key={index} value={value.name}>{value.name}</MenuItem>)))
                                    :
                                    (<MenuItem disabled>No data found</MenuItem>)}
                            </TextField>

                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue=""
                                    name="radio-buttons-group"
                                    value=""
                                    onChange={(e) =>
                                        executeUserActionPallet(e.target.value)
                                    }
                                >
                                    <FormControlLabel
                                        id="ImportData2"
                                        value="ImportData2"
                                        style={
                                            importradio
                                        }
                                        disabled={
                                            role === "guest" ||
                                            S_selectpallet === ""
                                        }
                                        control={<Radio />}
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </Grid>



    );
}


export default PalletDesign;