import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core//Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

export default function ListData({ sampleData }) {
  return (
    <Container maxWidth='lg' style={{ marginTop: "50px" }}>
      <Paper elevation={3}>
        {sampleData &&
          sampleData.map((item) => (
            <List
              key={item.id + " " + item.name}
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                  <Avatar>{item.name.charAt(0)}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={item.name + ` - ` + item.date}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component='span'
                        variant='body2'
                      >
                        {item.description}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant='inset' component='li' />
            </List>
          ))}
      </Paper>
    </Container>
  );
}
