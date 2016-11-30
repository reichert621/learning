;
; Chapter 1.1 - Notes
;

; defining a function
(defn square [x]
  (* x x))

; using the function as a building block in other functions
(defn sum-of-squares [x y]
  (+ (square x) (square y)))

; once again, using functions as building blocks
(defn f [x]
  (sum-of-squares (* x 2) (+ x 10)))

; expressing conditional with `cond`
(defn abs [x]
  (cond
    (> x 0) x
    (< x 0) (- x)
    (= x 0) 0))

; conditional with `cond` + `else`
(defn abs [x]
  (cond
    (< x 0) (- x)
    :else x))

; conditional with `if`
(defn abs [x]
  (if (< x 0)
    (- x)
    x))

; using logical `and`
(defn between [n x y]
  (and (> n x) (< n y)))

; using logical `or`
(defn gte [x y]
  (or (> x y) (= x y)))

; using `not`
(defn lte [x y]
  (not (> x y)))

;
; Chapter 1.1 - Exercises
;

; Ex 1.1:
; What are the results of each expression?

; 10

; (+ 5 3 4)

; (- 9 1)

; (/ 6 2)

; (+ (* 2 4) (- 4 6))

; (define a 3)
; (define b (+ a 1))
; (+ a b (* a b))

; (= a b)

; (if (and (> b a) (< b (* a b)))
;  b
;  a)

; (cond ((= a 4) 6)
;  ((= b 4) (+ 6 7 a))
;  (else 25))

; (+ 2 (if (> b a) b a))

; (* (cond ((> a b) a)
;  ((< a b) b)
;  (else -1))
;  (+ a 1))


; Ex 1.2:
; Translate the following expression into prefix form:
; (5 + 4 + (2 - (3 - (6 + 0.8)))) / (3 * (6 - 2) * (2 - 7))

; Ex 1.3:
; Define a procedure that takes three numbers as arguments
; and returns the sum of the squares of the two larger numbers.
