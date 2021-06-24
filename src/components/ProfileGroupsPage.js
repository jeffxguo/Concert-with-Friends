import React, { useState } from 'react';
import { testData } from '../testGroups';
import { Box, ButtonBase, Container, Grid, Button, makeStyles } from '@material-ui/core';
import ProfileGroups from './ProfileGroups';
import Member from './Member';

export default function ProfileGroupsPage() {
    const classes = useStyles();

    const [data, setData] = useState(JSON.parse(testData).groups);
    const [selectedGroup, setSelectedGroup] = useState(null);
    return (
        <div className={classes.boxes}>
            <Box className={classes.groupsBox} borderRadius="borderRadius">
                {data.map((group, i) => {
                    return (
                        <div className={classes.items} key={i}>
                            <ButtonBase onClick={() => {setSelectedGroup(group)}}>
                                <ProfileGroups name={group.name} details={group.description} image={group.image} />
                            </ButtonBase>
                        </div>
                    )
                })}
            </Box>
            <Box className={classes.selectedGroupBox} borderRadius="borderRadius" justify="center">
                    {(selectedGroup !== null) && selectedGroup.members.map((member, i) => {
                        return (
                            <div className={classes.items} key={i}>
                                <Member name={member.name} image={member.image} phone={member.phone} email={member.email} ig={member.instagram} />
                            </div>
                        )
                    })}
            </Box>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    boxes: {
        justifyContent: 'center',
        padding: '5px 15px',
        display: 'flex',
        flexDirection: 'row'
    },
    items: {
        paddingTop: '1em',
    },
    groupsBox: {
        paddingTop: '2em',
        height: '50em',
        width: '45em',
        backgroundColor: 'grey',
        overflowY: 'scroll',
    },
    selectedGroupBox: {
        margin: '0 0 0 7em',
        paddingTop: '2em',
        height: '50em',
        width: '45em',
        backgroundColor: 'grey',
        overflowY: 'scroll',
    }
}));