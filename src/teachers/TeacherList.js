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
export const TeacherList = props => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="firstName" />
            <TextField source="lastName" />
            <EmailField source="email" />
            <TextField source="password" />
            <TextField source="typeOfUser" />
            <TextField source="macAddress" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
        </Datagrid>
    </List>
);

export default TeacherList;
