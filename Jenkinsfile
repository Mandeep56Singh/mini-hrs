pipeline {
    agent { docker { image 'node:18.18.0-alpine3.18' } }
    stages {
        stage('test-front-end') {
            steps {
                sh 'npm run test:fe'
            }
        }
    }
}