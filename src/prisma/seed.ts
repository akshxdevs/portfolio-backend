import { prismaClient } from "../db/db";

async function Main() {
    await prismaClient.projects.create({
        data:{
            projectTitle:"Grocery-App",
            projectDescription:"Seamless grocery shopping—fresh picks, fast delivery, and hassle-free checkout at your fingertips. A Zepto based clone",
            githubLink:"https://github.com/akshxdevs/Grocery-App",
            projectImg:"https://media-hosting.imagekit.io/87442a1d04c144f5/WhatsApp Image 2025-03-28 at 19.00.22.jpeg?Expires=1838040965&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Lvc2ClbOAUbhsQN3r0hDMuALbe0sP0B1GQWFXw8Na-xzCk9tN8SMTRGOL5uNrBh9jH0-oc41HAxkneD0-AwRv6LkeT~y-Rr-Jp4kRz6p0Zwt1ihkju2oq0a5FxYlfdbNk94s~JlheyfAR~U6JVAMkBhQGqDRRGCQyiaOO-XFmcanHs6JxYbjBXhx9o0ZGAwzX8kEGEXckq4Q4JZ2LNSs8izZ43bfyfaDSk6hk~Gk8AtmwpOYMsZ03gOfZDY6W4FJdPPaMBYT-WaxAqoI79sGi04uC170RN~tB04IPwg2GqZvoP2bG27xtymq5VeNstHOWpOSQ9qfSIIWnwUBNypx3Q__"
        }
    })
    await prismaClient.projects.create({
        data:{
            projectTitle:"Blog-App",
            projectDescription:"A sleek and intuitive platform to share ideas, explore insights, and connect through powerful storytelling. A Substack based clone",
            githubLink:"https://github.com/akshxdevs/Blog-App",
            projectImg:"https://media-hosting.imagekit.io/19df9a57a5a6420f/WhatsApp Image 2025-03-28 at 18.56.10.jpeg?Expires=1838041129&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=HbaDru~Q1TCp50zxafYbDTUAOXohQaX94mkSqzWPgFrWR1U-ViA6orFE~l73Hxp6u3OoLSCUrYbLIg~LPMyUfMO4PIXVUVR-6W696JrDqqgXRWwVEARNg075A2TVRVwfNlYQ3MdhIZ7vTQd4JVN7f~tPNOBMV~CI9V9FBYUZAgs1Js4zz-5jfKlhmWBE6oiiwifcRkqKcjhgf4wSJpIPCVk7a47Hm7KpRe~PO2gehYvo2rsy9uy2JVXEXpqz0enPaSTHsrTYUD9tTocE91OFqgA9s8ld1mzHKdx9HEmYl2s9ZiANeEhmsAV1P~0yEVGW8RDqrqx6tCgjKc0fwWD3pQ__"
        }
    })
    await prismaClient.projects.create({
        data:{
            projectTitle:"Chat-App",
            projectDescription:"A real-time chat application powered by an event-driven system using Kafka, Redis, and WebSockets for fast, scalable, and decoupled messaging.",
            githubLink:"https://github.com/akshxdevs/Social-Media-App",
            projectImg:""
        }
    });
    await prismaClient.projects.create({
        data:{
            projectTitle:"Emergency Alert System - App",
            projectDescription:"A scalable, real-time Emergency Alert System built using event-driven architecture with Kafka, Redis, and WebSockets.",
            githubLink:"https://github.com/akshxdevs/emergency-alert-system.git",
            projectImg:"https://media-hosting.imagekit.io/d752bfe9a3aa4b1e/Screenshot%20From%202025-04-23%2014-33-50.png?Expires=1841333270&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Vg-3TsZwnnCJcf~RJI3vuDPsQ9AR6OJJ4jg92RdYq89R21Nz2IrkRqKoMREq~a0ux2qC-ObsY12bwR6IQQqlokz4aWWuq5tWOhZ95lfk~XCYhEIbMtKdApxM-q2Fpj6EiMMO6Q~nZiMlgUI-gk2oSYcUj6XuDr9Q8VenMdYWD4xeApbJMRbsdd0gYkI0j-AjH9x7lbugxxh44rTCfy5UZNXkvcxD~L1U4EXQ40pOkIOqGPMO7MLPUEqC0f4~PjZeR0m~~c7SnElP1rliAG4CT0R9VHLYEJ-IH13gJbOCr6rSxZ-9aAhXvyk1w4SFFDPvI8QlCwXMx85vJWAbxd42oA__"
        }
    })

}

Main();