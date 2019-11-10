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
} from 'react-admin';
const ClassesList = props => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="inSession" />
            <ReferenceField
                label="Teacher"
                source="teacherId"
                reference="teachers"
            >
                <TextField source="firstName" />
            </ReferenceField>
            <NumberField source="noOfStudents" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
        </Datagrid>
    </List>
);

export default ClassesList;
