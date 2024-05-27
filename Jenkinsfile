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

                            if [ -f /etc/os-release ]; then
                                . /etc/os-release
                                OS=$ID
                                VER=$VERSION_ID
                            fi

                            if [ "$OS" = "ubuntu" ]; then
                                apt-get update
                                apt-get install -y apt-transport-https ca-certificates curl software-properties-common
                                curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
                                add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
                                apt-get update
                                apt-get install -y docker-ce
                            elif [ "$OS" = "debian" ]; then
                                apt-get update
                                apt-get install -y apt-transport-https ca-certificates curl gnupg2 software-properties-common
                                curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -
                                add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"
                                apt-get update
                                apt-get install -y docker-ce
                            elif [ "$OS" = "centos" ]; then
                                yum install -y yum-utils
                                yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
                                yum install -y docker-ce
                                systemctl start docker
                                systemctl enable docker
                            else
                                echo "Sistema operacional não suportado"
                                exit 1
                            fi

                            usermod -aG docker $USER
                            systemctl start docker
                            systemctl enable docker
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
