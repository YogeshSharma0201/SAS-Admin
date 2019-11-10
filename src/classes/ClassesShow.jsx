import React from 'react';
import {
    Show,
    SimpleShowLayout,
    TextField,
    DateField,
    RichTextField,
    List,
    Datagrid,
    SingleFieldList,
    ChipField,
    ArrayField,
    NumberField,
    ReferenceField,
    EmailField,
} from 'react-admin';

const ClassesShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="inSession" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
            <ArrayField source="students">
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="firstName" />
                    <TextField source="lastName" />
                    <EmailField source="email" />
                    <DateField source="password" />
                    <TextField source="typeOfUser" />
                    <TextField source="macAddress" />
                    <DateField source="rollNo" />
                    <DateField source="createdAt" />
                    <DateField source="updatedAt" />
                </Datagrid>
            </ArrayField>
        </SimpleShowLayout>
    </Show>
);

export default ClassesShow;
