﻿#pragma strict
private var target : GameObject;

function Start () {
	target = GameObject.Find("playerfollow");
}

function Update () {
	transform.position.x = target.transform.position.x+1;
	transform.position.y = target.transform.position.y+.5;
}

