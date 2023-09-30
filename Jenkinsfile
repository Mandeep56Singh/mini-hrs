pipeline {
    agent { docker { image 'node:18.18.0-alpine3.18' } }
    stages {
        stage('Install packages') {
            steps {
                sh 'npm i'
            }
        },
         stage('Test Front End') {
            steps {
                sh 'npm run test:fe'
            }
        }
    }
}