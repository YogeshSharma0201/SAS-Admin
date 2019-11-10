import OrderIcon from '@material-ui/icons/AttachMoney';
import { ListGuesser, ShowGuesser, EditGuesser } from 'react-admin';

import ClassesEdit from './ClassesEdit';
import ClassesList from './ClassesList';
import ClassesShow from './ClassesShow';
import ClassesCreate from './ClassesCreate';

export default {
    list: ClassesList,
    edit: ClassesEdit,
    icon: OrderIcon,
    show: ClassesShow,
    create: ClassesCreate,
};
