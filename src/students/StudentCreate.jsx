import React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    DateInput,
    TextField,
    DisabledInput,
} from 'react-admin';

const StudentCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <TextInput source="email" />
            <TextInput source="password" />
            <TextInput source="macAddress" />
            <TextInput source="rollNo" />
        </SimpleForm>
    </Create>
);

export default StudentCreate;
