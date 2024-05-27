pipeline {
    agent any

    stages {
        stage('Instalar Docker') {
            steps {
                script {
                    if (isUnix()) {
                        // Detectar o sistema operacional e instalar Docker
                        sh '''
                            #!/bin/bash
                            set -e

                            sudo yum install -y yum-utils
                            sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
                            sudo yum install -y docker-ce
                            sudo systemctl start docker
                            sudo systemctl enable docker

                            sudo usermod -aG docker $USER
                            sudo systemctl start docker
                            sudo systemctl enable docker
                        '''
                    } else {
                        error 'Este script só suporta sistemas Unix'
                    }
                }
            }
        }
        stage('Verificar Instalação Docker') {
            steps {
                script {
                    sh 'docker --version'
                }
            }
        }
    }
}
