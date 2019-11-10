import React from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    DateInput,
    TextField,
    DisabledInput,
} from 'react-admin';

const TeacherEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <TextInput source="email" />
            <TextInput source="password" />
            <TextInput source="macAddress" />
        </SimpleForm>
    </Edit>
);

export default TeacherEdit;
