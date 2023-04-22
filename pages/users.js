import { useState } from "react";
import Link from "next/link";
import MainContainer from "../components/MainContainer.js"
const Users = ({users})=>{
    return(
        <MainContainer keywords={"users"}>        
            <h3>Hello User</h3>         
            <ul>
                {users.map(user =>
                    
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            {user.name}
                        </Link>
                    </li>
                )}
            </ul>
        </MainContainer>
    )
}
export default Users

export async function getServerSideProps(context) {
    const responce = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await responce.json()
    return {
      props: {users}, // will be passed to the page component as props
    }
}