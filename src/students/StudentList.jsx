import React, { Fragment } from 'react';
import {
    AutocompleteInput,
    BooleanField,
    Datagrid,
    DateField,
    DateInput,
    EditButton,
    Filter,
    List,
    NullableBooleanInput,
    NumberField,
    ReferenceInput,
    Responsive,
    SearchInput,
    TextField,
    TextInput,
    EmailField,
} from 'react-admin';

const StudentList = props => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="firstName" />
            <TextField source="lastName" />
            <EmailField source="email" />
            <TextField source="typeOfUser" />
            <TextField source="macAddress" />
            <TextField source="rollNo" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
        </Datagrid>
    </List>
);

export default StudentList;
