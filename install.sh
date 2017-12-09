#!/bin/bash
sudo apt install -y php5-gd xdotool

echo "0   1    * * *  pi      DISPLAY=:0.0 xset dpms force off" | sudo tee -a /etc/crontab
echo "*/5 7-23 * * *  pi      DISPLAY=:0.0 xset -dpms" | sudo tee -a /etc/crontab
echo "0   7-23 * * *  pi      DISPLAY=:0.0 xdotool getactivewindow | DISPLAY=:0.0 xdotool key F5" | sudo tee -a /etc/crontab
