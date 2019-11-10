import React from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    DateInput,
    RichTextField,
    List,
    Datagrid,
    SingleFieldList,
    ReferenceInput,
    ArrayInput,
    SimpleFormIterator,
    NumberInput,
    SelectInput,
    TextField,
} from 'react-admin';

const ClassEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <ReferenceInput source="teacherId" reference="teachers">
                <SelectInput optionText="firstName" />
            </ReferenceInput>
            <ArrayInput source="students">
                <SimpleFormIterator>
                    <ReferenceInput source="id" reference="students">
                        <SelectInput optionText="rollNo" />
                    </ReferenceInput>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);

export default ClassEdit;
