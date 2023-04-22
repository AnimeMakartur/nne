import { useRouter } from "next/router"
import styles from "../../styles/user.module.scss"
import MainContainer from "../../components/MainContainer.js"


export default function User({user}){
    const {query} = useRouter()
    return(
        <MainContainer keywords={user.name}>
            <div className={styles.user}>
                <h3>Hello user id: {query.id}</h3>
                <h3>Name: {user.name}</h3>
            </div>
        </MainContainer>
        
    )
}

export async function getServerSideProps({params}) {
    const responce = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await responce.json()
    return {
      props: {user}, // will be passed to the page component as props
    }
}