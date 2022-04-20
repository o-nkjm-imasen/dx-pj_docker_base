# MariaDB 
run 1 mariadb instance and without replication
how to access :
* main(replica):
  * mysql -u root -p --port [port] -h 127.0.0.1


## grant policy
> grant all privileges on `[tablename]`.* to '[username]'@'%' identified by '[password]';
