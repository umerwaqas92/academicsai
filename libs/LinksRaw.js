import { GrHomeRounded, GrUserSettings ,GrTrash,GrUser} from "react-icons/gr";
export const AdminLinks=[
    {
        title:"Home",
        link:"/app",
        icon: <GrHomeRounded size={20} color="black" className='opacity-40' />
        
    },
    {
        title:"Trash",
        link:"/app/trash",
        icon: <GrTrash size={20} color="black" className='opacity-40' />
    },
    {
        title:"Account",
        link:"/app/account",
        icon: <GrUserSettings size={20} color="black" className='opacity-40' />
    }

]