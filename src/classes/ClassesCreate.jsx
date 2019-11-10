import React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    ReferenceInput,
    SelectInput,
} from 'react-admin';

const ClassesShow = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <ReferenceInput source="teacherId" reference="teachers">
                <SelectInput optionText="firstName" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

export default ClassesShow;
