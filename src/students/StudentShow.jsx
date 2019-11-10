import React from 'react';
import {
    Show,
    SimpleShowLayout,
    TextField,
    DateField,
    EmailField,
} from 'react-admin';

const StudentShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="firstName" />
            <TextField source="lastName" />
            <EmailField source="email" />
            <TextField source="password" />
            <TextField source="typeOfUser" />
            <TextField source="macAddress" />
            <TextField source="rollNo" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
        </SimpleShowLayout>
    </Show>
);

export default StudentShow;
