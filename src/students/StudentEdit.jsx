import React from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    DateInput,
    TextField,
    DisabledInput,
} from 'react-admin';

const StudentEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <TextInput source="email" />
            <TextInput source="password" />
            <TextInput source="typeOfUser" />
            <TextInput source="macAddress" />
            <TextInput source="rollNo" />
            <DateInput source="createdAt" />
            <DateInput source="updatedAt" />
        </SimpleForm>
    </Edit>
);

export default StudentEdit;
