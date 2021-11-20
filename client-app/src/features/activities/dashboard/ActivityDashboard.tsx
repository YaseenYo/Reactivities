import React from 'react'
import { Grid} from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity'
import ActivityDetails from '../details/ActivityDetails'
import ActivityForm from '../form/ActivityForm'
import ActivityList from './ActivityList'

interface Props {
    activities : Activity[]; 
    selectedActivity : Activity | undefined;
    selectActivity : (id : string) => void;
    cancelSelectActivity : () => void;  
    editMode : boolean;
    openForm : (id : string) => void;
    closeForm : () => void;
    createOrEdit : (activity : Activity) => void; 
    deleteActivity : (id : string) => void; 
}

export default function ActivityDashboard({activities, selectActivity, createOrEdit, deleteActivity,
        selectedActivity, cancelSelectActivity, editMode, openForm, closeForm} : Props) {
    return (
        <Grid>
            <Grid.Column width = '10'>
                <ActivityList activities = {activities} deleteActivity = {deleteActivity} selectActivity = {selectActivity} />
            </Grid.Column>
            <Grid.Column width = '6'>
                {selectedActivity && !editMode &&
                    <ActivityDetails activity = {selectedActivity} 
                    cancelSelectedActivity = {cancelSelectActivity} openForm = {openForm}/>}  
                {editMode && 
                    <ActivityForm createOrEdit = {createOrEdit} closeForm = {closeForm} activity = {selectedActivity} />}
            </Grid.Column>
        </Grid>
    )
}
