import React, { useState } from 'react';
import { testData } from '../testGroups';
import { Box, makeStyles } from '@material-ui/core';
import ProfileGroups from './ProfileGroups';
import Member from './Member';
import { COLORS } from '../constants/Colors';

export default function ProfileGroupsPage() {
    const classes = useStyles();

    const [data, setData] = useState(JSON.parse(testData).groups);
    const [selectedGroup, setSelectedGroup] = useState(null);
    return (
        <div className={classes.boxes}>
            <div style={{ display: "block" }}>
                <h1>Joined Groups</h1>
                <Box className={classes.groupsBox} borderRadius="borderRadius">
                    {data.map((group, i) => {
                        return (
                            <div className={
                                selectedGroup?.name === group.name ?
                                    classes.itemSelected :
                                    classes.items} key={i} onClick={
                                        () => {
                                            setSelectedGroup(group)
                                            setData([...data])
                                        }}>
                                <ProfileGroups name={group.name} details={group.description} image={group.image} />
                            </div>
                        )
                    })}
                </Box>
            </div>

            {selectedGroup && <div style={{ display: "block" }}>
                <h1>{selectedGroup?.name}: Members</h1>
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
            }   </div>
    )
}

const useStyles = makeStyles(theme => ({
    boxes: {
        justifyContent: 'center',
        padding: "2em 10%",
        display: 'flex',
        flexDirection: 'row'
    },
    items: {
        marginBottom: '1em',
    },
    itemSelected: {
        marginBottom: '1em',
        borderColor: COLORS.highlight,
        borderWidth: "2px",
        borderStyle: "solid"
    },
    groupsBox: {
        height: '50em',
        width: '45em',
        backgroundColor: COLORS.lightGrey,
        padding: "1em",
        overflowY: 'scroll',
    },
    selectedGroupBox: {
        padding: "1em",
        margin: '0 0 0 2em',
        paddingTop: '1em',
        height: '50em',
        width: '45em',
        backgroundColor: COLORS.lightGrey,
        overflowY: 'scroll',
    }
}));