x:= 1
y:=2

MouseMove, 1084, 350

Loop, 156 {

	Sleep, (100)
	MouseClick, right
	Sleep, (100)
	MouseMove, 566, 443
	Sleep, (100)
	MouseClick, right
	Sleep, (1000)
	Send, {Left 5}
	Sleep, (1000)
	Send, %x% 
	Send, {enter}
	Sleep, (1000)
	MouseMove, 1084, 350
	Sleep, (1000)
	MouseClick, left
	Sleep, (1000)
	Send, jp(%y%)
	Sleep, (1000)
	Send, {enter}
	Sleep, (8000)

	x++
	y++

	MouseMove, 440, 350

}