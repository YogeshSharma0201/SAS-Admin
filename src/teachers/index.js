import OrderIcon from '@material-ui/icons/AttachMoney';
import { ListGuesser, ShowGuesser, EditGuesser } from 'react-admin';

import TeacherList from './TeacherList';
import TeacherEdit from './TeacherEdit';
import TeacherShow from './TeacherShow';
import TeacherCreate from './TeacherCreate';

export default {
    list: TeacherList,
    edit: TeacherEdit,
    icon: OrderIcon,
    show: TeacherShow,
    create: TeacherCreate,
};
