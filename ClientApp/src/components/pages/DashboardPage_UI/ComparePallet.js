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
import "../styles.css"
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";





const ComparePallet = ({
    expanded_panel,
    handlexpand,
    handleToggle,
    S_palletnames,
    S_checked,
    role,
    styles,
    t


}) => {
//   const palletName=S_palletnames.filter((name,i)=>{
//         if(role!=="admin" && name.id!==462 ){
//             return name.value
//         }
//         if(role==="admin" ){
//             return name.value
//         }
//     })
//     console.log(palletName,"filtered according role")
    return (
        <Grid item xs={12} style={{ marginTop: "7px" }}>
            <ExpansionPanel
                style={{
                    boxShadow: "none",
                    width: "512px",
                    backgroundColor: "#f5f5f5",
                }}
                expanded={expanded_panel === "panel0"}
                onChange={(event) => handlexpand("panel0", event)}

            >
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    id="panel3-header"
                >
                    <Typography>{t("ComparePalletDesigns")}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>



                    <Typography>
                        <List
                            className="listcss"
                            dense
                            sx={{ width: 490, height: 150, overflowX: "hidden" }}
                        >
                            {S_palletnames?.map((name, index) => {
                                console.log(name)
                                const value = index;
                                const labelId = `checkbox-list-secondary-label-${value}`;
                                return (
                                    <ListItem
                                        className="inputfield2"
                                        key={value}
                                        secondaryAction={
                                            <Checkbox
                                                style={{
                                                    height: "18px",
                                                    width: "16px",
                                                    marginRight: "5px",
                                                }}
                                                edge="end"
                                                id="chk-box"
                                                sx={{
                                                    color: "grey",
                                                    "&.Mui-checked": {
                                                        color: "rgb(0,125,129)",
                                                    },
                                                }}
                                                onChange={handleToggle(value)}
                                                checked={
                                                    S_checked.indexOf(value) !== -1
                                                }
                                                inputProps={{ "aria-labelledby": labelId }}
                                            />
                                        }
                                        disablePadding
                                    >
                                        <ListItemButton>
                                            <ListItemText
                                                primaryTypographyProps={{
                                                    style: styles.listItem,
                                                }}
                                                id={labelId}
                                                primary={`${name.value}`}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </Grid>

    );
}


export default ComparePallet;