import {useState, useEffect} from 'react'

const GetPosts = () => {

    // data
    const [page_name, setPageName] = useState<string | null>(null)
    const [posts, setPosts] = useState<object | any>([])

    // methods
    async function getPosts() {
        const bodyData = {name: 'oybek'}
        const response = await fetch('/api/posts', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodyData)
        })
        const data = await response.json()
        setPosts(data)
        localStorage.setItem('auth', data.count)
    }

    useEffect(() => {
        setPageName("Posts page")
        getPosts()
    }, [])
    return (
        <div>
            {
                posts?.data?.map((post: any) => {
                    return (
                        <div style={{padding: '5px'}} key={post.id}>
                            <span style={{fontWeight: 'bold'}}>Post {JSON.stringify(post.id)}:</span> {JSON.stringify(post.title)}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default GetPosts