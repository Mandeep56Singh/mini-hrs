pipeline {
    agent { docker { image 'node:16.20.2-alpine3.18' } }
    stages {
        stage('Install packages') {
            steps {
                sh 'npm i'
            }
        }
         stage('Test Front End') {
            steps {
                sh 'npm run test:fe'
            }
        }
    }
}