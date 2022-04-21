echo "Docker install start" &&
sudo apt-get install ca-certificates curl gnupg lsb-release &&
echo "done1" &&
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg &&
echo "done2" &&
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null &&
echo "done3" &&
sudo apt-get update &&
echo "done4" &&
sudo apt-get install docker-ce docker-ce-cli containerd.io
echo "done5" &&
echo "Compose install start" &&
sudo mkdir -p /usr/local/libexec/docker/cli-plugins
echo "done1" &&
cd /usr/local/libexec/docker/cli-plugins
echo "done2" &&
sudo curl -L https://github.com/docker/compose/releases/download/v2.4.1/docker-compose-linux-x86_64 -o docker-compose &&
echo "done3" &&
sudo chmod +x docker-compose &&
echo "done4" &&
docker compose version
exit 0
