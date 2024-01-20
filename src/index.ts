import { app } from "./app"

const run = async () => {
    try {
        const port = 3000

        app.listen(port)
        console.log(`Server on port ${port}`)
    } catch (error) {
        console.error(error)
    } 
}

run()
