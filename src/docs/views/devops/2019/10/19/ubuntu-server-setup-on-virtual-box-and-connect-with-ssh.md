---
title: Ubuntu Server setup on Virtual box and connect with SSH
date: 2019-10-19
tags:
 - Ubuntu Server
categories:
 - DevOps
---

Here, I guide how to connect with ubuntu server installed on virtual box via SSH.


## Install Virtual box and Ubuntu Server
Download virtual box from [Oracle Virtualbox](https://www.virtualbox.org/wiki/Downloads).

Install virtual box on your machine.

Download ubuntu server from [ubuntu](http://releases.ubuntu.com/).

Then setup ubuntu server on virtual box.

After successful setup, login to ubuntu server in virtual machine.

## Setup SSH on ubuntu server
Then open terminal and install following packages:
```shell script
sudo apt update
sudo apt install openssh-server
sudo apt install ssh
```

Once installation is completed, the SSH service should start automatically.
To verify the installation type following command:
```shell script
sudo systemctl status ssh
```

You should see something like `Active: active (running)`

Now go to virtual box click on ubuntu instance and click on `settings`.
Then click on `Network`
Then choose `Adapter 1` select `Attached to` to `Bridge Adapter` and `Name` to anyone.

Then run following command in ubuntu server.
```shell script
sudo ufw disable
```

## Login to server via SSH

Then login to server via ssh by following command
```shell script
ssh your_username@your_server_ip_address
```

To see ip address type following command
```shell script
ifconfig
```

In my case, ip address is `192.68.31.225` and username is `test`

```shell script
ssh test@192.68.31.225
```

> #### Optional
>
>If you get timeout while connecting via ssh.
>
>Stop your virtual machine.
>Set the net of your virtual machine:
>Click on settings and network:
>Select NAT as connection and click on advanced.
>
>Click on port forwarding:
>```shell script
>Name: SSH
>Protocol: TCP
>Host IP: 127.0.0.1
>Host Port: 2222
>IP Guest: Empty
>Port Guest: 22
>```
>
>Start your Virtual Machine:
>When your virtual machine is started, open your terminal and try to connect:
>```shell script
>ssh yourusername@127.0.0.1 -p 2222
>```




