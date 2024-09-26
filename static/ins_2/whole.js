/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  'use strict';
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error('jQuery requires a window with a document');
            return t(e);
          })
    : t(e);
})('undefined' != typeof window ? window : this, function (ie, e) {
  'use strict';
  var oe = [],
    r = Object.getPrototypeOf,
    ae = oe.slice,
    g = oe.flat
      ? function (e) {
          return oe.flat.call(e);
        }
      : function (e) {
          return oe.concat.apply([], e);
        },
    s = oe.push,
    se = oe.indexOf,
    n = {},
    i = n.toString,
    ue = n.hasOwnProperty,
    o = ue.toString,
    a = o.call(Object),
    le = {},
    v = function (e) {
      return (
        'function' == typeof e &&
        'number' != typeof e.nodeType &&
        'function' != typeof e.item
      );
    },
    y = function (e) {
      return null != e && e === e.window;
    },
    C = ie.document,
    u = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0,
    };
  function m(e, t, n) {
    var r,
      i,
      o = (n = n || C).createElement('script');
    if (((o.text = e), t))
      for (r in u)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function x(e) {
    return null == e
      ? e + ''
      : 'object' == typeof e || 'function' == typeof e
      ? n[i.call(e)] || 'object'
      : typeof e;
  }
  var t = '3.7.1',
    l = /HTML$/i,
    ce = function (e, t) {
      return new ce.fn.init(e, t);
    };
  function c(e) {
    var t = !!e && 'length' in e && e.length,
      n = x(e);
    return (
      !v(e) &&
      !y(e) &&
      ('array' === n ||
        0 === t ||
        ('number' == typeof t && 0 < t && t - 1 in e))
    );
  }
  function fe(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  (ce.fn = ce.prototype =
    {
      jquery: t,
      constructor: ce,
      length: 0,
      toArray: function () {
        return ae.call(this);
      },
      get: function (e) {
        return null == e
          ? ae.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = ce.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return ce.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          ce.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(ae.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          ce.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          ce.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: s,
      sort: oe.sort,
      splice: oe.splice,
    }),
    (ce.extend = ce.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          'boolean' == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            'object' == typeof a || v(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                '__proto__' !== t &&
                  a !== r &&
                  (l && r && (ce.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || ce.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = ce.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    ce.extend({
      expando: 'jQuery' + (t + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || '[object Object]' !== i.call(e)) &&
          (!(t = r(e)) ||
            ('function' ==
              typeof (n = ue.call(t, 'constructor') && t.constructor) &&
              o.call(n) === a))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        m(
          e,
          {
            nonce: t && t.nonce,
          },
          n
        );
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (c(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      text: function (e) {
        var t,
          n = '',
          r = 0,
          i = e.nodeType;
        if (!i) while ((t = e[r++])) n += ce.text(t);
        return 1 === i || 11 === i
          ? e.textContent
          : 9 === i
          ? e.documentElement.textContent
          : 3 === i || 4 === i
          ? e.nodeValue
          : n;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (c(Object(e))
              ? ce.merge(n, 'string' == typeof e ? [e] : e)
              : s.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : se.call(t, e, n);
      },
      isXMLDoc: function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !l.test(t || (n && n.nodeName) || 'HTML');
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (c(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: le,
    }),
    'function' == typeof Symbol &&
      (ce.fn[Symbol.iterator] = oe[Symbol.iterator]),
    ce.each(
      'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
        ' '
      ),
      function (e, t) {
        n['[object ' + t + ']'] = t.toLowerCase();
      }
    );
  var pe = oe.pop,
    de = oe.sort,
    he = oe.splice,
    ge = '[\\x20\\t\\r\\n\\f]',
    ve = new RegExp('^' + ge + '+|((?:^|[^\\\\])(?:\\\\.)*)' + ge + '+$', 'g');
  ce.contains = function (e, t) {
    var n = t && t.parentNode;
    return (
      e === n ||
      !(
        !n ||
        1 !== n.nodeType ||
        !(e.contains
          ? e.contains(n)
          : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n))
      )
    );
  };
  var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function p(e, t) {
    return t
      ? '\0' === e
        ? '\ufffd'
        : e.slice(0, -1) + '\\' + e.charCodeAt(e.length - 1).toString(16) + ' '
      : '\\' + e;
  }
  ce.escapeSelector = function (e) {
    return (e + '').replace(f, p);
  };
  var ye = C,
    me = s;
  !(function () {
    var e,
      b,
      w,
      o,
      a,
      T,
      r,
      C,
      d,
      i,
      k = me,
      S = ce.expando,
      E = 0,
      n = 0,
      s = W(),
      c = W(),
      u = W(),
      h = W(),
      l = function (e, t) {
        return e === t && (a = !0), 0;
      },
      f =
        'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      t =
        '(?:\\\\[\\da-fA-F]{1,6}' +
        ge +
        '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
      p =
        '\\[' +
        ge +
        '*(' +
        t +
        ')(?:' +
        ge +
        '*([*^$|!~]?=)' +
        ge +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
        t +
        '))|)' +
        ge +
        '*\\]',
      g =
        ':(' +
        t +
        ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
        p +
        ')*)|.*)\\)|)',
      v = new RegExp(ge + '+', 'g'),
      y = new RegExp('^' + ge + '*,' + ge + '*'),
      m = new RegExp('^' + ge + '*([>+~]|' + ge + ')' + ge + '*'),
      x = new RegExp(ge + '|>'),
      j = new RegExp(g),
      A = new RegExp('^' + t + '$'),
      D = {
        ID: new RegExp('^#(' + t + ')'),
        CLASS: new RegExp('^\\.(' + t + ')'),
        TAG: new RegExp('^(' + t + '|[*])'),
        ATTR: new RegExp('^' + p),
        PSEUDO: new RegExp('^' + g),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
            ge +
            '*(even|odd|(([+-]|)(\\d*)n|)' +
            ge +
            '*(?:([+-]|)' +
            ge +
            '*(\\d+)|))' +
            ge +
            '*\\)|)',
          'i'
        ),
        bool: new RegExp('^(?:' + f + ')$', 'i'),
        needsContext: new RegExp(
          '^' +
            ge +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            ge +
            '*((?:-\\d)?\\d*)' +
            ge +
            '*\\)|)(?=[^-]|$)',
          'i'
        ),
      },
      N = /^(?:input|select|textarea|button)$/i,
      q = /^h\d$/i,
      L = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      H = /[+~]/,
      O = new RegExp('\\\\[\\da-fA-F]{1,6}' + ge + '?|\\\\([^\\r\\n\\f])', 'g'),
      P = function (e, t) {
        var n = '0x' + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      M = function () {
        V();
      },
      R = J(
        function (e) {
          return !0 === e.disabled && fe(e, 'fieldset');
        },
        {
          dir: 'parentNode',
          next: 'legend',
        }
      );
    try {
      k.apply((oe = ae.call(ye.childNodes)), ye.childNodes),
        oe[ye.childNodes.length].nodeType;
    } catch (e) {
      k = {
        apply: function (e, t) {
          me.apply(e, ae.call(t));
        },
        call: function (e) {
          me.apply(e, ae.call(arguments, 1));
        },
      };
    }
    function I(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        'string' != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (!r && (V(e), (e = e || T), C)) {
        if (11 !== p && (u = L.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return k.call(n, a), n;
            } else if (
              f &&
              (a = f.getElementById(i)) &&
              I.contains(e, a) &&
              a.id === i
            )
              return k.call(n, a), n;
          } else {
            if (u[2]) return k.apply(n, e.getElementsByTagName(t)), n;
            if ((i = u[3]) && e.getElementsByClassName)
              return k.apply(n, e.getElementsByClassName(i)), n;
          }
        if (!(h[t + ' '] || (d && d.test(t)))) {
          if (((c = t), (f = e), 1 === p && (x.test(t) || m.test(t)))) {
            ((f = (H.test(t) && U(e.parentNode)) || e) == e && le.scope) ||
              ((s = e.getAttribute('id'))
                ? (s = ce.escapeSelector(s))
                : e.setAttribute('id', (s = S))),
              (o = (l = Y(t)).length);
            while (o--) l[o] = (s ? '#' + s : ':scope') + ' ' + Q(l[o]);
            c = l.join(',');
          }
          try {
            return k.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            h(t, !0);
          } finally {
            s === S && e.removeAttribute('id');
          }
        }
      }
      return re(t.replace(ve, '$1'), e, n, r);
    }
    function W() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + ' ') > b.cacheLength && delete e[r.shift()],
          (e[t + ' '] = n)
        );
      };
    }
    function F(e) {
      return (e[S] = !0), e;
    }
    function $(e) {
      var t = T.createElement('fieldset');
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function B(t) {
      return function (e) {
        return fe(e, 'input') && e.type === t;
      };
    }
    function _(t) {
      return function (e) {
        return (fe(e, 'input') || fe(e, 'button')) && e.type === t;
      };
    }
    function z(t) {
      return function (e) {
        return 'form' in e
          ? e.parentNode && !1 === e.disabled
            ? 'label' in e
              ? 'label' in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && R(e) === t)
            : e.disabled === t
          : 'label' in e && e.disabled === t;
      };
    }
    function X(a) {
      return F(function (o) {
        return (
          (o = +o),
          F(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function U(e) {
      return e && 'undefined' != typeof e.getElementsByTagName && e;
    }
    function V(e) {
      var t,
        n = e ? e.ownerDocument || e : ye;
      return (
        n != T &&
          9 === n.nodeType &&
          n.documentElement &&
          ((r = (T = n).documentElement),
          (C = !ce.isXMLDoc(T)),
          (i = r.matches || r.webkitMatchesSelector || r.msMatchesSelector),
          r.msMatchesSelector &&
            ye != T &&
            (t = T.defaultView) &&
            t.top !== t &&
            t.addEventListener('unload', M),
          (le.getById = $(function (e) {
            return (
              (r.appendChild(e).id = ce.expando),
              !T.getElementsByName || !T.getElementsByName(ce.expando).length
            );
          })),
          (le.disconnectedMatch = $(function (e) {
            return i.call(e, '*');
          })),
          (le.scope = $(function () {
            return T.querySelectorAll(':scope');
          })),
          (le.cssHas = $(function () {
            try {
              return T.querySelector(':has(*,:jqfake)'), !1;
            } catch (e) {
              return !0;
            }
          })),
          le.getById
            ? ((b.filter.ID = function (e) {
                var t = e.replace(O, P);
                return function (e) {
                  return e.getAttribute('id') === t;
                };
              }),
              (b.find.ID = function (e, t) {
                if ('undefined' != typeof t.getElementById && C) {
                  var n = t.getElementById(e);
                  return n ? [n] : [];
                }
              }))
            : ((b.filter.ID = function (e) {
                var n = e.replace(O, P);
                return function (e) {
                  var t =
                    'undefined' != typeof e.getAttributeNode &&
                    e.getAttributeNode('id');
                  return t && t.value === n;
                };
              }),
              (b.find.ID = function (e, t) {
                if ('undefined' != typeof t.getElementById && C) {
                  var n,
                    r,
                    i,
                    o = t.getElementById(e);
                  if (o) {
                    if ((n = o.getAttributeNode('id')) && n.value === e)
                      return [o];
                    (i = t.getElementsByName(e)), (r = 0);
                    while ((o = i[r++]))
                      if ((n = o.getAttributeNode('id')) && n.value === e)
                        return [o];
                  }
                  return [];
                }
              })),
          (b.find.TAG = function (e, t) {
            return 'undefined' != typeof t.getElementsByTagName
              ? t.getElementsByTagName(e)
              : t.querySelectorAll(e);
          }),
          (b.find.CLASS = function (e, t) {
            if ('undefined' != typeof t.getElementsByClassName && C)
              return t.getElementsByClassName(e);
          }),
          (d = []),
          $(function (e) {
            var t;
            (r.appendChild(e).innerHTML =
              "<a id='" +
              S +
              "' href='' disabled='disabled'></a><select id='" +
              S +
              "-\r\\' disabled='disabled'><option selected=''></option></select>"),
              e.querySelectorAll('[selected]').length ||
                d.push('\\[' + ge + '*(?:value|' + f + ')'),
              e.querySelectorAll('[id~=' + S + '-]').length || d.push('~='),
              e.querySelectorAll('a#' + S + '+*').length || d.push('.#.+[+~]'),
              e.querySelectorAll(':checked').length || d.push(':checked'),
              (t = T.createElement('input')).setAttribute('type', 'hidden'),
              e.appendChild(t).setAttribute('name', 'D'),
              (r.appendChild(e).disabled = !0),
              2 !== e.querySelectorAll(':disabled').length &&
                d.push(':enabled', ':disabled'),
              (t = T.createElement('input')).setAttribute('name', ''),
              e.appendChild(t),
              e.querySelectorAll("[name='']").length ||
                d.push('\\[' + ge + '*name' + ge + '*=' + ge + '*(?:\'\'|"")');
          }),
          le.cssHas || d.push(':has'),
          (d = d.length && new RegExp(d.join('|'))),
          (l = function (e, t) {
            if (e === t) return (a = !0), 0;
            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return (
              n ||
              (1 &
                (n =
                  (e.ownerDocument || e) == (t.ownerDocument || t)
                    ? e.compareDocumentPosition(t)
                    : 1) ||
              (!le.sortDetached && t.compareDocumentPosition(e) === n)
                ? e === T || (e.ownerDocument == ye && I.contains(ye, e))
                  ? -1
                  : t === T || (t.ownerDocument == ye && I.contains(ye, t))
                  ? 1
                  : o
                  ? se.call(o, e) - se.call(o, t)
                  : 0
                : 4 & n
                ? -1
                : 1)
            );
          })),
        T
      );
    }
    for (e in ((I.matches = function (e, t) {
      return I(e, null, null, t);
    }),
    (I.matchesSelector = function (e, t) {
      if ((V(e), C && !h[t + ' '] && (!d || !d.test(t))))
        try {
          var n = i.call(e, t);
          if (
            n ||
            le.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          h(t, !0);
        }
      return 0 < I(t, T, null, [e]).length;
    }),
    (I.contains = function (e, t) {
      return (e.ownerDocument || e) != T && V(e), ce.contains(e, t);
    }),
    (I.attr = function (e, t) {
      (e.ownerDocument || e) != T && V(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && ue.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
      return void 0 !== r ? r : e.getAttribute(t);
    }),
    (I.error = function (e) {
      throw new Error('Syntax error, unrecognized expression: ' + e);
    }),
    (ce.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((a = !le.sortStable),
        (o = !le.sortStable && ae.call(e, 0)),
        de.call(e, l),
        a)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) he.call(e, n[r], 1);
      }
      return (o = null), e;
    }),
    (ce.fn.uniqueSort = function () {
      return this.pushStack(ce.uniqueSort(ae.apply(this)));
    }),
    ((b = ce.expr =
      {
        cacheLength: 50,
        createPseudo: F,
        match: D,
        attrHandle: {},
        find: {},
        relative: {
          '>': {
            dir: 'parentNode',
            first: !0,
          },
          ' ': {
            dir: 'parentNode',
          },
          '+': {
            dir: 'previousSibling',
            first: !0,
          },
          '~': {
            dir: 'previousSibling',
          },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(O, P)),
              (e[3] = (e[3] || e[4] || e[5] || '').replace(O, P)),
              '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              'nth' === e[1].slice(0, 3)
                ? (e[3] || I.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ('even' === e[3] || 'odd' === e[3]))),
                  (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                : e[3] && I.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return D.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || '')
                  : n &&
                    j.test(n) &&
                    (t = Y(n, !0)) &&
                    (t = n.indexOf(')', n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(O, P).toLowerCase();
            return '*' === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return fe(e, t);
                };
          },
          CLASS: function (e) {
            var t = s[e + ' '];
            return (
              t ||
              ((t = new RegExp('(^|' + ge + ')' + e + '(' + ge + '|$)')) &&
                s(e, function (e) {
                  return t.test(
                    ('string' == typeof e.className && e.className) ||
                      ('undefined' != typeof e.getAttribute &&
                        e.getAttribute('class')) ||
                      ''
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = I.attr(e, n);
              return null == t
                ? '!=' === r
                : !r ||
                    ((t += ''),
                    '=' === r
                      ? t === i
                      : '!=' === r
                      ? t !== i
                      : '^=' === r
                      ? i && 0 === t.indexOf(i)
                      : '*=' === r
                      ? i && -1 < t.indexOf(i)
                      : '$=' === r
                      ? i && t.slice(-i.length) === i
                      : '~=' === r
                      ? -1 < (' ' + t.replace(v, ' ') + ' ').indexOf(i)
                      : '|=' === r &&
                        (t === i || t.slice(0, i.length + 1) === i + '-'));
            };
          },
          CHILD: function (d, e, t, h, g) {
            var v = 'nth' !== d.slice(0, 3),
              y = 'last' !== d.slice(-4),
              m = 'of-type' === e;
            return 1 === h && 0 === g
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u = v !== y ? 'nextSibling' : 'previousSibling',
                    l = e.parentNode,
                    c = m && e.nodeName.toLowerCase(),
                    f = !n && !m,
                    p = !1;
                  if (l) {
                    if (v) {
                      while (u) {
                        o = e;
                        while ((o = o[u]))
                          if (m ? fe(o, c) : 1 === o.nodeType) return !1;
                        s = u = 'only' === d && !s && 'nextSibling';
                      }
                      return !0;
                    }
                    if (((s = [y ? l.firstChild : l.lastChild]), y && f)) {
                      (p =
                        (a =
                          (r = (i = l[S] || (l[S] = {}))[d] || [])[0] === E &&
                          r[1]) && r[2]),
                        (o = a && l.childNodes[a]);
                      while ((o = (++a && o && o[u]) || (p = a = 0) || s.pop()))
                        if (1 === o.nodeType && ++p && o === e) {
                          i[d] = [E, a, p];
                          break;
                        }
                    } else if (
                      (f &&
                        (p = a =
                          (r = (i = e[S] || (e[S] = {}))[d] || [])[0] === E &&
                          r[1]),
                      !1 === p)
                    )
                      while ((o = (++a && o && o[u]) || (p = a = 0) || s.pop()))
                        if (
                          (m ? fe(o, c) : 1 === o.nodeType) &&
                          ++p &&
                          (f && ((i = o[S] || (o[S] = {}))[d] = [E, p]),
                          o === e)
                        )
                          break;
                    return (p -= g) === h || (p % h == 0 && 0 <= p / h);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                I.error('unsupported pseudo: ' + e);
            return a[S]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, '', o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? F(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = se.call(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: F(function (e) {
            var r = [],
              i = [],
              s = ne(e.replace(ve, '$1'));
            return s[S]
              ? F(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: F(function (t) {
            return function (e) {
              return 0 < I(t, e).length;
            };
          }),
          contains: F(function (t) {
            return (
              (t = t.replace(O, P)),
              function (e) {
                return -1 < (e.textContent || ce.text(e)).indexOf(t);
              }
            );
          }),
          lang: F(function (n) {
            return (
              A.test(n || '') || I.error('unsupported lang: ' + n),
              (n = n.replace(O, P).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = C
                      ? e.lang
                      : e.getAttribute('xml:lang') || e.getAttribute('lang'))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + '-')
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = ie.location && ie.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === r;
          },
          focus: function (e) {
            return (
              e ===
                (function () {
                  try {
                    return T.activeElement;
                  } catch (e) {}
                })() &&
              T.hasFocus() &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: z(!1),
          disabled: z(!0),
          checked: function (e) {
            return (
              (fe(e, 'input') && !!e.checked) ||
              (fe(e, 'option') && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return q.test(e.nodeName);
          },
          input: function (e) {
            return N.test(e.nodeName);
          },
          button: function (e) {
            return (fe(e, 'input') && 'button' === e.type) || fe(e, 'button');
          },
          text: function (e) {
            var t;
            return (
              fe(e, 'input') &&
              'text' === e.type &&
              (null == (t = e.getAttribute('type')) ||
                'text' === t.toLowerCase())
            );
          },
          first: X(function () {
            return [0];
          }),
          last: X(function (e, t) {
            return [t - 1];
          }),
          eq: X(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: X(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: X(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: X(function (e, t, n) {
            var r;
            for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: X(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0,
    }))
      b.pseudos[e] = B(e);
    for (e in {
      submit: !0,
      reset: !0,
    })
      b.pseudos[e] = _(e);
    function G() {}
    function Y(e, t) {
      var n,
        r,
        i,
        o,
        a,
        s,
        u,
        l = c[e + ' '];
      if (l) return t ? 0 : l.slice(0);
      (a = e), (s = []), (u = b.preFilter);
      while (a) {
        for (o in ((n && !(r = y.exec(a))) ||
          (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
        (n = !1),
        (r = m.exec(a)) &&
          ((n = r.shift()),
          i.push({
            value: n,
            type: r[0].replace(ve, ' '),
          }),
          (a = a.slice(n.length))),
        b.filter))
          !(r = D[o].exec(a)) ||
            (u[o] && !(r = u[o](r))) ||
            ((n = r.shift()),
            i.push({
              value: n,
              type: o,
              matches: r,
            }),
            (a = a.slice(n.length)));
        if (!n) break;
      }
      return t ? a.length : a ? I.error(e) : c(e, s).slice(0);
    }
    function Q(e) {
      for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value;
      return r;
    }
    function J(a, e, t) {
      var s = e.dir,
        u = e.next,
        l = u || s,
        c = t && 'parentNode' === l,
        f = n++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[s])) if (1 === e.nodeType || c) return a(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o = [E, f];
            if (n) {
              while ((e = e[s]))
                if ((1 === e.nodeType || c) && a(e, t, n)) return !0;
            } else
              while ((e = e[s]))
                if (1 === e.nodeType || c)
                  if (((i = e[S] || (e[S] = {})), u && fe(e, u))) e = e[s] || e;
                  else {
                    if ((r = i[l]) && r[0] === E && r[1] === f)
                      return (o[2] = r[2]);
                    if (((i[l] = o)[2] = a(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function K(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Z(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function ee(d, h, g, v, y, e) {
      return (
        v && !v[S] && (v = ee(v)),
        y && !y[S] && (y = ee(y, e)),
        F(function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u = [],
            l = [],
            c = t.length,
            f =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) I(e, t[r], n);
                return n;
              })(h || '*', n.nodeType ? [n] : n, []),
            p = !d || (!e && h) ? f : Z(f, u, d, n, r);
          if (
            (g ? g(p, (s = y || (e ? d : c || v) ? [] : t), n, r) : (s = p), v)
          ) {
            (i = Z(s, l)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (s[l[o]] = !(p[l[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = s.length);
                while (o--) (a = s[o]) && i.push((p[o] = a));
                y(null, (s = []), i, r);
              }
              o = s.length;
              while (o--)
                (a = s[o]) &&
                  -1 < (i = y ? se.call(e, a) : u[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (s = Z(s === t ? s.splice(c, s.length) : s)), y ? y(null, t, s, r) : k.apply(t, s);
        })
      );
    }
    function te(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[' '],
          s = o ? 1 : 0,
          u = J(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = J(
            function (e) {
              return -1 < se.call(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t != w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [J(K(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return ee(
              1 < s && K(c),
              1 < s &&
                Q(
                  e.slice(0, s - 1).concat({
                    value: ' ' === e[s - 2].type ? '*' : '',
                  })
                ).replace(ve, '$1'),
              t,
              s < n && te(e.slice(s, n)),
              n < r && te((e = e.slice(n))),
              n < r && Q(e)
            );
          }
          c.push(t);
        }
      return K(c);
    }
    function ne(e, t) {
      var n,
        v,
        y,
        m,
        x,
        r,
        i = [],
        o = [],
        a = u[e + ' '];
      if (!a) {
        t || (t = Y(e)), (n = t.length);
        while (n--) (a = te(t[n]))[S] ? i.push(a) : o.push(a);
        (a = u(
          e,
          ((v = o),
          (m = 0 < (y = i).length),
          (x = 0 < v.length),
          (r = function (e, t, n, r, i) {
            var o,
              a,
              s,
              u = 0,
              l = '0',
              c = e && [],
              f = [],
              p = w,
              d = e || (x && b.find.TAG('*', i)),
              h = (E += null == p ? 1 : Math.random() || 0.1),
              g = d.length;
            for (
              i && (w = t == T || t || i);
              l !== g && null != (o = d[l]);
              l++
            ) {
              if (x && o) {
                (a = 0), t || o.ownerDocument == T || (V(o), (n = !C));
                while ((s = v[a++]))
                  if (s(o, t || T, n)) {
                    k.call(r, o);
                    break;
                  }
                i && (E = h);
              }
              m && ((o = !s && o) && u--, e && c.push(o));
            }
            if (((u += l), m && l !== u)) {
              a = 0;
              while ((s = y[a++])) s(c, f, t, n);
              if (e) {
                if (0 < u) while (l--) c[l] || f[l] || (f[l] = pe.call(r));
                f = Z(f);
              }
              k.apply(r, f),
                i && !e && 0 < f.length && 1 < u + y.length && ce.uniqueSort(r);
            }
            return i && ((E = h), (w = p)), c;
          }),
          m ? F(r) : r)
        )).selector = e;
      }
      return a;
    }
    function re(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l = 'function' == typeof e && e,
        c = !r && Y((e = l.selector || e));
      if (((n = n || []), 1 === c.length)) {
        if (
          2 < (o = c[0] = c[0].slice(0)).length &&
          'ID' === (a = o[0]).type &&
          9 === t.nodeType &&
          C &&
          b.relative[o[1].type]
        ) {
          if (!(t = (b.find.ID(a.matches[0].replace(O, P), t) || [])[0]))
            return n;
          l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
        }
        i = D.needsContext.test(e) ? 0 : o.length;
        while (i--) {
          if (((a = o[i]), b.relative[(s = a.type)])) break;
          if (
            (u = b.find[s]) &&
            (r = u(
              a.matches[0].replace(O, P),
              (H.test(o[0].type) && U(t.parentNode)) || t
            ))
          ) {
            if ((o.splice(i, 1), !(e = r.length && Q(o))))
              return k.apply(n, r), n;
            break;
          }
        }
      }
      return (
        (l || ne(e, c))(r, t, !C, n, !t || (H.test(e) && U(t.parentNode)) || t),
        n
      );
    }
    (G.prototype = b.filters = b.pseudos),
      (b.setFilters = new G()),
      (le.sortStable = S.split('').sort(l).join('') === S),
      V(),
      (le.sortDetached = $(function (e) {
        return 1 & e.compareDocumentPosition(T.createElement('fieldset'));
      })),
      (ce.find = I),
      (ce.expr[':'] = ce.expr.pseudos),
      (ce.unique = ce.uniqueSort),
      (I.compile = ne),
      (I.select = re),
      (I.setDocument = V),
      (I.tokenize = Y),
      (I.escape = ce.escapeSelector),
      (I.getText = ce.text),
      (I.isXML = ce.isXMLDoc),
      (I.selectors = ce.expr),
      (I.support = ce.support),
      (I.uniqueSort = ce.uniqueSort);
  })();
  var d = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && ce(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    h = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    b = ce.expr.match.needsContext,
    w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function T(e, n, r) {
    return v(n)
      ? ce.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? ce.grep(e, function (e) {
          return (e === n) !== r;
        })
      : 'string' != typeof n
      ? ce.grep(e, function (e) {
          return -1 < se.call(n, e) !== r;
        })
      : ce.filter(n, e, r);
  }
  (ce.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ':not(' + e + ')'),
      1 === t.length && 1 === r.nodeType
        ? ce.find.matchesSelector(r, e)
          ? [r]
          : []
        : ce.find.matches(
            e,
            ce.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    ce.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ('string' != typeof e)
          return this.pushStack(
            ce(e).filter(function () {
              for (t = 0; t < r; t++) if (ce.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) ce.find(e, i[t], n);
        return 1 < r ? ce.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(T(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(T(this, e || [], !0));
      },
      is: function (e) {
        return !!T(
          this,
          'string' == typeof e && b.test(e) ? ce(e) : e || [],
          !1
        ).length;
      },
    });
  var k,
    S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((ce.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || k), 'string' == typeof e)) {
      if (
        !(r =
          '<' === e[0] && '>' === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : S.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof ce ? t[0] : t),
          ce.merge(
            this,
            ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)
          ),
          w.test(r[1]) && ce.isPlainObject(t))
        )
          for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = C.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : v(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(ce)
      : ce.makeArray(e, this);
  }).prototype = ce.fn),
    (k = ce(C));
  var E = /^(?:parents|prev(?:Until|All))/,
    j = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0,
    };
  function A(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  ce.fn.extend({
    has: function (e) {
      var t = ce(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (ce.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = 'string' != typeof e && ce(e);
      if (!b.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && ce.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? ce.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? 'string' == typeof e
          ? se.call(ce(e), this[0])
          : se.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    ce.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return d(e, 'parentNode');
        },
        parentsUntil: function (e, t, n) {
          return d(e, 'parentNode', n);
        },
        next: function (e) {
          return A(e, 'nextSibling');
        },
        prev: function (e) {
          return A(e, 'previousSibling');
        },
        nextAll: function (e) {
          return d(e, 'nextSibling');
        },
        prevAll: function (e) {
          return d(e, 'previousSibling');
        },
        nextUntil: function (e, t, n) {
          return d(e, 'nextSibling', n);
        },
        prevUntil: function (e, t, n) {
          return d(e, 'previousSibling', n);
        },
        siblings: function (e) {
          return h((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return h(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (fe(e, 'template') && (e = e.content || e),
              ce.merge([], e.childNodes));
        },
      },
      function (r, i) {
        ce.fn[r] = function (e, t) {
          var n = ce.map(this, i, e);
          return (
            'Until' !== r.slice(-5) && (t = e),
            t && 'string' == typeof t && (n = ce.filter(t, n)),
            1 < this.length &&
              (j[r] || ce.uniqueSort(n), E.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var D = /[^\x20\t\r\n\f]+/g;
  function N(e) {
    return e;
  }
  function q(e) {
    throw e;
  }
  function L(e, t, n, r) {
    var i;
    try {
      e && v((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && v((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (ce.Callbacks = function (r) {
    var e, n;
    r =
      'string' == typeof r
        ? ((e = r),
          (n = {}),
          ce.each(e.match(D) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : ce.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : '');
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                ce.each(e, function (e, t) {
                  v(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && 'string' !== x(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            ce.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = ce.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < ce.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ''), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ''), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    ce.extend({
      Deferred: function (e) {
        var o = [
            [
              'notify',
              'progress',
              ce.Callbacks('memory'),
              ce.Callbacks('memory'),
              2,
            ],
            [
              'resolve',
              'done',
              ce.Callbacks('once memory'),
              ce.Callbacks('once memory'),
              0,
              'resolved',
            ],
            [
              'reject',
              'fail',
              ce.Callbacks('once memory'),
              ce.Callbacks('once memory'),
              1,
              'rejected',
            ],
          ],
          i = 'pending',
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return ce
                .Deferred(function (r) {
                  ce.each(o, function (e, t) {
                    var n = v(i[t[4]]) && i[t[4]];
                    s[t[1]](function () {
                      var e = n && n.apply(this, arguments);
                      e && v(e.promise)
                        ? e
                            .promise()
                            .progress(r.notify)
                            .done(r.resolve)
                            .fail(r.reject)
                        : r[t[0] + 'With'](this, n ? [e] : arguments);
                    });
                  }),
                    (i = null);
                })
                .promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError('Thenable self-resolution');
                        (t =
                          e &&
                          ('object' == typeof e || 'function' == typeof e) &&
                          e.then),
                          v(t)
                            ? s
                              ? t.call(e, l(u, o, N, s), l(u, o, q, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, N, s),
                                  l(u, o, q, s),
                                  l(u, o, N, o.notifyWith)
                                ))
                            : (a !== N && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            ce.Deferred.exceptionHook &&
                              ce.Deferred.exceptionHook(e, t.error),
                              u <= i + 1 &&
                                (a !== q && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (ce.Deferred.getErrorHook
                        ? (t.error = ce.Deferred.getErrorHook())
                        : ce.Deferred.getStackHook &&
                          (t.error = ce.Deferred.getStackHook()),
                      ie.setTimeout(t));
                };
              }
              return ce
                .Deferred(function (e) {
                  o[0][3].add(l(0, e, v(r) ? r : N, e.notifyWith)),
                    o[1][3].add(l(0, e, v(t) ? t : N)),
                    o[2][3].add(l(0, e, v(n) ? n : q));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? ce.extend(e, a) : a;
            },
          },
          s = {};
        return (
          ce.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + 'With'](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + 'With'] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = ae.call(arguments),
          o = ce.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? ae.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (L(e, o.done(a(t)).resolve, o.reject, !n),
          'pending' === o.state() || v(i[t] && i[t].then))
        )
          return o.then();
        while (t--) L(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (ce.Deferred.exceptionHook = function (e, t) {
    ie.console &&
      ie.console.warn &&
      e &&
      H.test(e.name) &&
      ie.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, t);
  }),
    (ce.readyException = function (e) {
      ie.setTimeout(function () {
        throw e;
      });
    });
  var O = ce.Deferred();
  function P() {
    C.removeEventListener('DOMContentLoaded', P),
      ie.removeEventListener('load', P),
      ce.ready();
  }
  (ce.fn.ready = function (e) {
    return (
      O.then(e)['catch'](function (e) {
        ce.readyException(e);
      }),
      this
    );
  }),
    ce.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --ce.readyWait : ce.isReady) ||
          ((ce.isReady = !0) !== e && 0 < --ce.readyWait) ||
          O.resolveWith(C, [ce]);
      },
    }),
    (ce.ready.then = O.then),
    'complete' === C.readyState ||
    ('loading' !== C.readyState && !C.documentElement.doScroll)
      ? ie.setTimeout(ce.ready)
      : (C.addEventListener('DOMContentLoaded', P),
        ie.addEventListener('load', P));
  var M = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ('object' === x(n))
        for (s in ((i = !0), n)) M(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        v(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(ce(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    R = /^-ms-/,
    I = /-([a-z])/g;
  function W(e, t) {
    return t.toUpperCase();
  }
  function F(e) {
    return e.replace(R, 'ms-').replace(I, W);
  }
  var $ = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function B() {
    this.expando = ce.expando + B.uid++;
  }
  (B.uid = 1),
    (B.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            $(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ('string' == typeof t) i[F(t)] = n;
        else for (r in t) i[F(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][F(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && 'string' == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(F)
              : (t = F(t)) in r
              ? [t]
              : t.match(D) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || ce.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !ce.isEmptyObject(t);
      },
    });
  var _ = new B(),
    z = new B(),
    X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    U = /[A-Z]/g;
  function V(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = 'data-' + t.replace(U, '-$&').toLowerCase()),
        'string' == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            'true' === (i = n) ||
            ('false' !== i &&
              ('null' === i
                ? null
                : i === +i + ''
                ? +i
                : X.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        z.set(e, t, n);
      } else n = void 0;
    return n;
  }
  ce.extend({
    hasData: function (e) {
      return z.hasData(e) || _.hasData(e);
    },
    data: function (e, t, n) {
      return z.access(e, t, n);
    },
    removeData: function (e, t) {
      z.remove(e, t);
    },
    _data: function (e, t, n) {
      return _.access(e, t, n);
    },
    _removeData: function (e, t) {
      _.remove(e, t);
    },
  }),
    ce.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = z.get(o)), 1 === o.nodeType && !_.get(o, 'hasDataAttrs'))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf('data-') &&
                ((r = F(r.slice(5))), V(o, r, i[r]));
            _.set(o, 'hasDataAttrs', !0);
          }
          return i;
        }
        return 'object' == typeof n
          ? this.each(function () {
              z.set(this, n);
            })
          : M(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = z.get(o, n))
                    ? t
                    : void 0 !== (t = V(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  z.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          z.remove(this, e);
        });
      },
    }),
    ce.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || 'fx') + 'queue'),
            (r = _.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = _.access(e, t, ce.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || 'fx';
        var n = ce.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = ce._queueHooks(e, t);
        'inprogress' === i && ((i = n.shift()), r--),
          i &&
            ('fx' === t && n.unshift('inprogress'),
            delete o.stop,
            i.call(
              e,
              function () {
                ce.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + 'queueHooks';
        return (
          _.get(e, n) ||
          _.access(e, n, {
            empty: ce.Callbacks('once memory').add(function () {
              _.remove(e, [t + 'queue', n]);
            }),
          })
        );
      },
    }),
    ce.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          'string' != typeof t && ((n = t), (t = 'fx'), e--),
          arguments.length < e
            ? ce.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = ce.queue(this, t, n);
                ce._queueHooks(this, t),
                  'fx' === t && 'inprogress' !== e[0] && ce.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          ce.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || 'fx', []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = ce.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        'string' != typeof e && ((t = e), (e = void 0)), (e = e || 'fx');
        while (a--)
          (n = _.get(o[a], e + 'queueHooks')) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Y = new RegExp('^(?:([+-])=|)(' + G + ')([a-z%]*)$', 'i'),
    Q = ['Top', 'Right', 'Bottom', 'Left'],
    J = C.documentElement,
    K = function (e) {
      return ce.contains(e.ownerDocument, e);
    },
    Z = {
      composed: !0,
    };
  J.getRootNode &&
    (K = function (e) {
      return (
        ce.contains(e.ownerDocument, e) || e.getRootNode(Z) === e.ownerDocument
      );
    });
  var ee = function (e, t) {
    return (
      'none' === (e = t || e).style.display ||
      ('' === e.style.display && K(e) && 'none' === ce.css(e, 'display'))
    );
  };
  function te(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return ce.css(e, t, '');
          },
      u = s(),
      l = (n && n[3]) || (ce.cssNumber[t] ? '' : 'px'),
      c =
        e.nodeType &&
        (ce.cssNumber[t] || ('px' !== l && +u)) &&
        Y.exec(ce.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        ce.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), ce.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ne = {};
  function re(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ('none' === n &&
              ((l[c] = _.get(r, 'display') || null),
              l[c] || (r.style.display = '')),
            '' === r.style.display &&
              ee(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ne[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = ce.css(o, 'display')),
                  o.parentNode.removeChild(o),
                  'none' === u && (u = 'block'),
                  (ne[s] = u)))))
          : 'none' !== n && ((l[c] = 'none'), _.set(r, 'display', n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  ce.fn.extend({
    show: function () {
      return re(this, !0);
    },
    hide: function () {
      return re(this);
    },
    toggle: function (e) {
      return 'boolean' == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ee(this) ? ce(this).show() : ce(this).hide();
          });
    },
  });
  var xe,
    be,
    we = /^(?:checkbox|radio)$/i,
    Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    Ce = /^$|^module$|\/(?:java|ecma)script/i;
  (xe = C.createDocumentFragment().appendChild(C.createElement('div'))),
    (be = C.createElement('input')).setAttribute('type', 'radio'),
    be.setAttribute('checked', 'checked'),
    be.setAttribute('name', 't'),
    xe.appendChild(be),
    (le.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (xe.innerHTML = '<textarea>x</textarea>'),
    (le.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue),
    (xe.innerHTML = '<option></option>'),
    (le.option = !!xe.lastChild);
  var ke = {
    thead: [1, '<table>', '</table>'],
    col: [2, '<table><colgroup>', '</colgroup></table>'],
    tr: [2, '<table><tbody>', '</tbody></table>'],
    td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
    _default: [0, '', ''],
  };
  function Se(e, t) {
    var n;
    return (
      (n =
        'undefined' != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || '*')
          : 'undefined' != typeof e.querySelectorAll
          ? e.querySelectorAll(t || '*')
          : []),
      void 0 === t || (t && fe(e, t)) ? ce.merge([e], n) : n
    );
  }
  function Ee(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      _.set(e[n], 'globalEval', !t || _.get(t[n], 'globalEval'));
  }
  (ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead),
    (ke.th = ke.td),
    le.option ||
      (ke.optgroup = ke.option =
        [1, "<select multiple='multiple'>", '</select>']);
  var je = /<|&#?\w+;/;
  function Ae(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ('object' === x(o)) ce.merge(p, o.nodeType ? [o] : o);
        else if (je.test(o)) {
          (a = a || f.appendChild(t.createElement('div'))),
            (s = (Te.exec(o) || ['', ''])[1].toLowerCase()),
            (u = ke[s] || ke._default),
            (a.innerHTML = u[1] + ce.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          ce.merge(p, a.childNodes), ((a = f.firstChild).textContent = '');
        } else p.push(t.createTextNode(o));
    (f.textContent = ''), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < ce.inArray(o, r)) i && i.push(o);
      else if (
        ((l = K(o)), (a = Se(f.appendChild(o), 'script')), l && Ee(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) Ce.test(o.type || '') && n.push(o);
      }
    return f;
  }
  var De = /^([^.]*)(?:\.(.+)|)/;
  function Ne() {
    return !0;
  }
  function qe() {
    return !1;
  }
  function Le(e, t, n, r, i, o) {
    var a, s;
    if ('object' == typeof t) {
      for (s in ('string' != typeof n && ((r = r || n), (n = void 0)), t))
        Le(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ('string' == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = qe;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return ce().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = ce.guid++))),
      e.each(function () {
        ce.event.add(this, t, i, r, n);
      })
    );
  }
  function He(e, r, t) {
    t
      ? (_.set(e, r, !1),
        ce.event.add(e, r, {
          namespace: !1,
          handler: function (e) {
            var t,
              n = _.get(this, r);
            if (1 & e.isTrigger && this[r]) {
              if (n)
                (ce.event.special[r] || {}).delegateType && e.stopPropagation();
              else if (
                ((n = ae.call(arguments)),
                _.set(this, r, n),
                this[r](),
                (t = _.get(this, r)),
                _.set(this, r, !1),
                n !== t)
              )
                return e.stopImmediatePropagation(), e.preventDefault(), t;
            } else
              n &&
                (_.set(this, r, ce.event.trigger(n[0], n.slice(1), this)),
                e.stopPropagation(),
                (e.isImmediatePropagationStopped = Ne));
          },
        }))
      : void 0 === _.get(e, r) && ce.event.add(e, r, Ne);
  }
  (ce.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = _.get(t);
      if ($(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && ce.find.matchesSelector(J, i),
          n.guid || (n.guid = ce.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return 'undefined' != typeof ce && ce.event.triggered !== e.type
                  ? ce.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || '').match(D) || ['']).length);
        while (l--)
          (d = g = (s = De.exec(e[l]) || [])[1]),
            (h = (s[2] || '').split('.').sort()),
            d &&
              ((f = ce.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = ce.event.special[d] || {}),
              (c = ce.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && ce.expr.match.needsContext.test(i),
                  namespace: h.join('.'),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (ce.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = _.hasData(e) && _.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || '').match(D) || ['']).length;
        while (l--)
          if (
            ((d = g = (s = De.exec(t[l]) || [])[1]),
            (h = (s[2] || '').split('.').sort()),
            d)
          ) {
            (f = ce.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)')),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ('**' !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                ce.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) ce.event.remove(e, d + t[l], n, r, !0);
        ce.isEmptyObject(u) && _.remove(e, 'handle events');
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = ce.event.fix(e),
        l = (_.get(this, 'events') || Object.create(null))[u.type] || [],
        c = ce.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = ce.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (ce.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !('click' === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ('click' !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + ' ')] &&
                (a[i] = r.needsContext
                  ? -1 < ce(i, this).index(l)
                  : ce.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length &&
              s.push({
                elem: l,
                handlers: o,
              });
          }
      return (
        (l = this),
        u < t.length &&
          s.push({
            elem: l,
            handlers: t.slice(u),
          }),
        s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(ce.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: v(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[ce.expando] ? e : new ce.Event(e);
    },
    special: {
      load: {
        noBubble: !0,
      },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            we.test(t.type) && t.click && fe(t, 'input') && He(t, 'click', !0),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            we.test(t.type) && t.click && fe(t, 'input') && He(t, 'click'), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (we.test(t.type) &&
              t.click &&
              fe(t, 'input') &&
              _.get(t, 'click')) ||
            fe(t, 'a')
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (ce.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (ce.Event = function (e, t) {
      if (!(this instanceof ce.Event)) return new ce.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Ne
              : qe),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && ce.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[ce.expando] = !0);
    }),
    (ce.Event.prototype = {
      constructor: ce.Event,
      isDefaultPrevented: qe,
      isPropagationStopped: qe,
      isImmediatePropagationStopped: qe,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Ne),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Ne),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Ne),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    ce.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      ce.event.addProp
    ),
    ce.each(
      {
        focus: 'focusin',
        blur: 'focusout',
      },
      function (r, i) {
        function o(e) {
          if (C.documentMode) {
            var t = _.get(this, 'handle'),
              n = ce.event.fix(e);
            (n.type = 'focusin' === e.type ? 'focus' : 'blur'),
              (n.isSimulated = !0),
              t(e),
              n.target === n.currentTarget && t(n);
          } else ce.event.simulate(i, e.target, ce.event.fix(e));
        }
        (ce.event.special[r] = {
          setup: function () {
            var e;
            if ((He(this, r, !0), !C.documentMode)) return !1;
            (e = _.get(this, i)) || this.addEventListener(i, o),
              _.set(this, i, (e || 0) + 1);
          },
          trigger: function () {
            return He(this, r), !0;
          },
          teardown: function () {
            var e;
            if (!C.documentMode) return !1;
            (e = _.get(this, i) - 1)
              ? _.set(this, i, e)
              : (this.removeEventListener(i, o), _.remove(this, i));
          },
          _default: function (e) {
            return _.get(e.target, r);
          },
          delegateType: i,
        }),
          (ce.event.special[i] = {
            setup: function () {
              var e = this.ownerDocument || this.document || this,
                t = C.documentMode ? this : e,
                n = _.get(t, i);
              n ||
                (C.documentMode
                  ? this.addEventListener(i, o)
                  : e.addEventListener(r, o, !0)),
                _.set(t, i, (n || 0) + 1);
            },
            teardown: function () {
              var e = this.ownerDocument || this.document || this,
                t = C.documentMode ? this : e,
                n = _.get(t, i) - 1;
              n
                ? _.set(t, i, n)
                : (C.documentMode
                    ? this.removeEventListener(i, o)
                    : e.removeEventListener(r, o, !0),
                  _.remove(t, i));
            },
          });
      }
    ),
    ce.each(
      {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout',
      },
      function (e, i) {
        ce.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || ce.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    ce.fn.extend({
      on: function (e, t, n, r) {
        return Le(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Le(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            ce(e.delegateTarget).off(
              r.namespace ? r.origType + '.' + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ('object' == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = qe),
          this.each(function () {
            ce.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Oe = /<script|<style|<link/i,
    Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Me = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function Re(e, t) {
    return (
      (fe(e, 'table') &&
        fe(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
        ce(e).children('tbody')[0]) ||
      e
    );
  }
  function Ie(e) {
    return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
  }
  function We(e) {
    return (
      'true/' === (e.type || '').slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute('type'),
      e
    );
  }
  function Fe(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (_.hasData(e) && (s = _.get(e).events))
        for (i in (_.remove(t, 'handle events'), s))
          for (n = 0, r = s[i].length; n < r; n++) ce.event.add(t, i, s[i][n]);
      z.hasData(e) && ((o = z.access(e)), (a = ce.extend({}, o)), z.set(t, a));
    }
  }
  function $e(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = v(d);
    if (h || (1 < f && 'string' == typeof d && !le.checkClone && Pe.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), $e(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = Ae(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = ce.map(Se(e, 'script'), Ie)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = ce.clone(u, !0, !0)), s && ce.merge(a, Se(u, 'script'))),
          i.call(n[c], u, c);
      if (s)
        for (
          l = a[a.length - 1].ownerDocument, ce.map(a, We), c = 0;
          c < s;
          c++
        )
          (u = a[c]),
            Ce.test(u.type || '') &&
              !_.access(u, 'globalEval') &&
              ce.contains(l, u) &&
              (u.src && 'module' !== (u.type || '').toLowerCase()
                ? ce._evalUrl &&
                  !u.noModule &&
                  ce._evalUrl(
                    u.src,
                    {
                      nonce: u.nonce || u.getAttribute('nonce'),
                    },
                    l
                  )
                : m(u.textContent.replace(Me, ''), u, l));
    }
    return n;
  }
  function Be(e, t, n) {
    for (var r, i = t ? ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || ce.cleanData(Se(r)),
        r.parentNode &&
          (n && K(r) && Ee(Se(r, 'script')), r.parentNode.removeChild(r));
    return e;
  }
  ce.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = K(e);
      if (
        !(
          le.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          ce.isXMLDoc(e)
        )
      )
        for (a = Se(c), r = 0, i = (o = Se(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            'input' === (l = u.nodeName.toLowerCase()) && we.test(s.type)
              ? (u.checked = s.checked)
              : ('input' !== l && 'textarea' !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || Se(e), a = a || Se(c), r = 0, i = o.length; r < i; r++)
            Fe(o[r], a[r]);
        else Fe(e, c);
      return (
        0 < (a = Se(c, 'script')).length && Ee(a, !f && Se(e, 'script')), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = ce.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if ($(n)) {
          if ((t = n[_.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, t.handle);
            n[_.expando] = void 0;
          }
          n[z.expando] && (n[z.expando] = void 0);
        }
    },
  }),
    ce.fn.extend({
      detach: function (e) {
        return Be(this, e, !0);
      },
      remove: function (e) {
        return Be(this, e);
      },
      text: function (e) {
        return M(
          this,
          function (e) {
            return void 0 === e
              ? ce.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return $e(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Re(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return $e(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Re(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return $e(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return $e(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (ce.cleanData(Se(e, !1)), (e.textContent = ''));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return ce.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return M(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              'string' == typeof e &&
              !Oe.test(e) &&
              !ke[(Te.exec(e) || ['', ''])[1].toLowerCase()]
            ) {
              e = ce.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (ce.cleanData(Se(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return $e(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            ce.inArray(this, n) < 0 &&
              (ce.cleanData(Se(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    ce.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith',
      },
      function (e, a) {
        ce.fn[e] = function (e) {
          for (var t, n = [], r = ce(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              ce(r[o])[a](t),
              s.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var _e = new RegExp('^(' + G + ')(?!px)[a-z%]+$', 'i'),
    ze = /^--/,
    Xe = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = ie), t.getComputedStyle(e);
    },
    Ue = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Ve = new RegExp(Q.join('|'), 'i');
  function Ge(e, t, n) {
    var r,
      i,
      o,
      a,
      s = ze.test(t),
      u = e.style;
    return (
      (n = n || Xe(e)) &&
        ((a = n.getPropertyValue(t) || n[t]),
        s && a && (a = a.replace(ve, '$1') || void 0),
        '' !== a || K(e) || (a = ce.style(e, t)),
        !le.pixelBoxStyles() &&
          _e.test(a) &&
          Ve.test(t) &&
          ((r = u.width),
          (i = u.minWidth),
          (o = u.maxWidth),
          (u.minWidth = u.maxWidth = u.width = a),
          (a = n.width),
          (u.width = r),
          (u.minWidth = i),
          (u.maxWidth = o))),
      void 0 !== a ? a + '' : a
    );
  }
  function Ye(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText =
          'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
          (l.style.cssText =
            'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
          J.appendChild(u).appendChild(l);
        var e = ie.getComputedStyle(l);
        (n = '1%' !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = '60%'),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = 'absolute'),
          (i = 12 === t(l.offsetWidth / 3)),
          J.removeChild(u),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = C.createElement('div'),
      l = C.createElement('div');
    l.style &&
      ((l.style.backgroundClip = 'content-box'),
      (l.cloneNode(!0).style.backgroundClip = ''),
      (le.clearCloneStyle = 'content-box' === l.style.backgroundClip),
      ce.extend(le, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = C.createElement('table')),
              (t = C.createElement('tr')),
              (n = C.createElement('div')),
              (e.style.cssText =
                'position:absolute;left:-11111px;border-collapse:separate'),
              (t.style.cssText = 'box-sizing:content-box;border:1px solid'),
              (t.style.height = '1px'),
              (n.style.height = '9px'),
              (n.style.display = 'block'),
              J.appendChild(e).appendChild(t).appendChild(n),
              (r = ie.getComputedStyle(t)),
              (a =
                parseInt(r.height, 10) +
                  parseInt(r.borderTopWidth, 10) +
                  parseInt(r.borderBottomWidth, 10) ===
                t.offsetHeight),
              J.removeChild(e)),
            a
          );
        },
      }));
  })();
  var Qe = ['Webkit', 'Moz', 'ms'],
    Je = C.createElement('div').style,
    Ke = {};
  function Ze(e) {
    var t = ce.cssProps[e] || Ke[e];
    return (
      t ||
      (e in Je
        ? e
        : (Ke[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = Qe.length;
              while (n--) if ((e = Qe[n] + t) in Je) return e;
            })(e) || e))
    );
  }
  var et = /^(none|table(?!-c[ea]).+)/,
    tt = {
      position: 'absolute',
      visibility: 'hidden',
      display: 'block',
    },
    nt = {
      letterSpacing: '0',
      fontWeight: '400',
    };
  function rt(e, t, n) {
    var r = Y.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
  }
  function it(e, t, n, r, i, o) {
    var a = 'width' === t ? 1 : 0,
      s = 0,
      u = 0,
      l = 0;
    if (n === (r ? 'border' : 'content')) return 0;
    for (; a < 4; a += 2)
      'margin' === n && (l += ce.css(e, n + Q[a], !0, i)),
        r
          ? ('content' === n && (u -= ce.css(e, 'padding' + Q[a], !0, i)),
            'margin' !== n &&
              (u -= ce.css(e, 'border' + Q[a] + 'Width', !0, i)))
          : ((u += ce.css(e, 'padding' + Q[a], !0, i)),
            'padding' !== n
              ? (u += ce.css(e, 'border' + Q[a] + 'Width', !0, i))
              : (s += ce.css(e, 'border' + Q[a] + 'Width', !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e['offset' + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u + l
    );
  }
  function ot(e, t, n) {
    var r = Xe(e),
      i =
        (!le.boxSizingReliable() || n) &&
        'border-box' === ce.css(e, 'boxSizing', !1, r),
      o = i,
      a = Ge(e, t, r),
      s = 'offset' + t[0].toUpperCase() + t.slice(1);
    if (_e.test(a)) {
      if (!n) return a;
      a = 'auto';
    }
    return (
      ((!le.boxSizingReliable() && i) ||
        (!le.reliableTrDimensions() && fe(e, 'tr')) ||
        'auto' === a ||
        (!parseFloat(a) && 'inline' === ce.css(e, 'display', !1, r))) &&
        e.getClientRects().length &&
        ((i = 'border-box' === ce.css(e, 'boxSizing', !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        it(e, t, n || (i ? 'border' : 'content'), o, r, a) +
        'px'
    );
  }
  function at(e, t, n, r, i) {
    return new at.prototype.init(e, t, n, r, i);
  }
  ce.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Ge(e, 'opacity');
            return '' === n ? '1' : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageSlice: !0,
      columnCount: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      scale: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = F(t),
          u = ze.test(t),
          l = e.style;
        if (
          (u || (t = Ze(s)),
          (a = ce.cssHooks[t] || ce.cssHooks[s]),
          void 0 === n)
        )
          return a && 'get' in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        'string' === (o = typeof n) &&
          (i = Y.exec(n)) &&
          i[1] &&
          ((n = te(e, t, i)), (o = 'number')),
          null != n &&
            n == n &&
            ('number' !== o ||
              u ||
              (n += (i && i[3]) || (ce.cssNumber[s] ? '' : 'px')),
            le.clearCloneStyle ||
              '' !== n ||
              0 !== t.indexOf('background') ||
              (l[t] = 'inherit'),
            (a && 'set' in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = F(t);
      return (
        ze.test(t) || (t = Ze(s)),
        (a = ce.cssHooks[t] || ce.cssHooks[s]) &&
          'get' in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Ge(e, t, r)),
        'normal' === i && t in nt && (i = nt[t]),
        '' === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    ce.each(['height', 'width'], function (e, u) {
      ce.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !et.test(ce.css(e, 'display')) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? ot(e, u, n)
              : Ue(e, tt, function () {
                  return ot(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Xe(e),
            o = !le.scrollboxSize() && 'absolute' === i.position,
            a = (o || n) && 'border-box' === ce.css(e, 'boxSizing', !1, i),
            s = n ? it(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e['offset' + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  it(e, u, 'border', !1, i) -
                  0.5
              )),
            s &&
              (r = Y.exec(t)) &&
              'px' !== (r[3] || 'px') &&
              ((e.style[u] = t), (t = ce.css(e, u))),
            rt(0, t, s)
          );
        },
      };
    }),
    (ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Ge(e, 'marginLeft')) ||
            e.getBoundingClientRect().left -
              Ue(
                e,
                {
                  marginLeft: 0,
                },
                function () {
                  return e.getBoundingClientRect().left;
                }
              )) + 'px'
        );
    })),
    ce.each(
      {
        margin: '',
        padding: '',
        border: 'Width',
      },
      function (i, o) {
        (ce.cssHooks[i + o] = {
          expand: function (e) {
            for (
              var t = 0, n = {}, r = 'string' == typeof e ? e.split(' ') : [e];
              t < 4;
              t++
            )
              n[i + Q[t] + o] = r[t] || r[t - 2] || r[0];
            return n;
          },
        }),
          'margin' !== i && (ce.cssHooks[i + o].set = rt);
      }
    ),
    ce.fn.extend({
      css: function (e, t) {
        return M(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Xe(e), i = t.length; a < i; a++)
                o[t[a]] = ce.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((ce.Tween = at).prototype = {
      constructor: at,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || ce.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (ce.cssNumber[n] ? '' : 'px'));
      },
      cur: function () {
        var e = at.propHooks[this.prop];
        return e && e.get ? e.get(this) : at.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = at.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                ce.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : at.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = at.prototype),
    ((at.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = ce.css(e.elem, e.prop, '')) && 'auto' !== t
            ? t
            : 0;
        },
        set: function (e) {
          ce.fx.step[e.prop]
            ? ce.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!ce.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : ce.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = at.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (ce.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: 'swing',
    }),
    (ce.fx = at.prototype.init),
    (ce.fx.step = {});
  var st,
    ut,
    lt,
    ct,
    ft = /^(?:toggle|show|hide)$/,
    pt = /queueHooks$/;
  function dt() {
    ut &&
      (!1 === C.hidden && ie.requestAnimationFrame
        ? ie.requestAnimationFrame(dt)
        : ie.setTimeout(dt, ce.fx.interval),
      ce.fx.tick());
  }
  function ht() {
    return (
      ie.setTimeout(function () {
        st = void 0;
      }),
      (st = Date.now())
    );
  }
  function gt(e, t) {
    var n,
      r = 0,
      i = {
        height: e,
      };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i['margin' + (n = Q[r])] = i['padding' + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function vt(e, t, n) {
    for (
      var r,
        i = (yt.tweeners[t] || []).concat(yt.tweeners['*']),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function yt(o, e, t) {
    var n,
      a,
      r = 0,
      i = yt.prefilters.length,
      s = ce.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = st || ht(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: ce.extend({}, e),
        opts: ce.extend(
          !0,
          {
            specialEasing: {},
            easing: ce.easing._default,
          },
          t
        ),
        originalProperties: e,
        originalOptions: t,
        startTime: st || ht(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = ce.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = F(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = ce.cssHooks[r]) && ('expand' in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = yt.prefilters[r].call(l, o, c, l.opts)))
        return (
          v(n.stop) &&
            (ce._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      ce.map(c, vt, l),
      v(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      ce.fx.timer(
        ce.extend(u, {
          elem: o,
          anim: l,
          queue: l.opts.queue,
        })
      ),
      l
    );
  }
  (ce.Animation = ce.extend(yt, {
    tweeners: {
      '*': [
        function (e, t) {
          var n = this.createTween(e, t);
          return te(n.elem, e, Y.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      v(e) ? ((t = e), (e = ['*'])) : (e = e.match(D));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (yt.tweeners[n] = yt.tweeners[n] || []),
          yt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = 'width' in t || 'height' in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ee(e),
          v = _.get(e, 'fxshow');
        for (r in (n.queue ||
          (null == (a = ce._queueHooks(e, 'fx')).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, ce.queue(e, 'fx').length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), ft.test(i))) {
            if (
              (delete t[r],
              (o = o || 'toggle' === i),
              i === (g ? 'hide' : 'show'))
            ) {
              if ('show' !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || ce.style(e, r);
          }
        if ((u = !ce.isEmptyObject(t)) || !ce.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = _.get(e, 'display')),
            'none' === (c = ce.css(e, 'display')) &&
              (l
                ? (c = l)
                : (re([e], !0),
                  (l = e.style.display || l),
                  (c = ce.css(e, 'display')),
                  re([e]))),
            ('inline' === c || ('inline-block' === c && null != l)) &&
              'none' === ce.css(e, 'float') &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = 'none' === c ? '' : c))),
              (h.display = 'inline-block'))),
          n.overflow &&
            ((h.overflow = 'hidden'),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? 'hidden' in v && (g = v.hidden)
                : (v = _.access(e, 'fxshow', {
                    display: l,
                  })),
              o && (v.hidden = !g),
              g && re([e], !0),
              p.done(function () {
                for (r in (g || re([e]), _.remove(e, 'fxshow'), d))
                  ce.style(e, r, d[r]);
              })),
              (u = vt(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? yt.prefilters.unshift(e) : yt.prefilters.push(e);
    },
  })),
    (ce.speed = function (e, t, n) {
      var r =
        e && 'object' == typeof e
          ? ce.extend({}, e)
          : {
              complete: n || (!n && t) || (v(e) && e),
              duration: e,
              easing: (n && t) || (t && !v(t) && t),
            };
      return (
        ce.fx.off
          ? (r.duration = 0)
          : 'number' != typeof r.duration &&
            (r.duration in ce.fx.speeds
              ? (r.duration = ce.fx.speeds[r.duration])
              : (r.duration = ce.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
        (r.old = r.complete),
        (r.complete = function () {
          v(r.old) && r.old.call(this), r.queue && ce.dequeue(this, r.queue);
        }),
        r
      );
    }),
    ce.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ee).css('opacity', 0).show().end().animate(
          {
            opacity: t,
          },
          e,
          n,
          r
        );
      },
      animate: function (t, e, n, r) {
        var i = ce.isEmptyObject(t),
          o = ce.speed(e, n, r),
          a = function () {
            var e = yt(this, ce.extend({}, t), o);
            (i || _.get(this, 'finish')) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          'string' != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || 'fx', []),
          this.each(function () {
            var e = !0,
              t = null != i && i + 'queueHooks',
              n = ce.timers,
              r = _.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && pt.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || ce.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || 'fx'),
          this.each(function () {
            var e,
              t = _.get(this),
              n = t[a + 'queue'],
              r = t[a + 'queueHooks'],
              i = ce.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                ce.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    ce.each(['toggle', 'show', 'hide'], function (e, r) {
      var i = ce.fn[r];
      ce.fn[r] = function (e, t, n) {
        return null == e || 'boolean' == typeof e
          ? i.apply(this, arguments)
          : this.animate(gt(r, !0), e, t, n);
      };
    }),
    ce.each(
      {
        slideDown: gt('show'),
        slideUp: gt('hide'),
        slideToggle: gt('toggle'),
        fadeIn: {
          opacity: 'show',
        },
        fadeOut: {
          opacity: 'hide',
        },
        fadeToggle: {
          opacity: 'toggle',
        },
      },
      function (e, r) {
        ce.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (ce.timers = []),
    (ce.fx.tick = function () {
      var e,
        t = 0,
        n = ce.timers;
      for (st = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || ce.fx.stop(), (st = void 0);
    }),
    (ce.fx.timer = function (e) {
      ce.timers.push(e), ce.fx.start();
    }),
    (ce.fx.interval = 13),
    (ce.fx.start = function () {
      ut || ((ut = !0), dt());
    }),
    (ce.fx.stop = function () {
      ut = null;
    }),
    (ce.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400,
    }),
    (ce.fn.delay = function (r, e) {
      return (
        (r = (ce.fx && ce.fx.speeds[r]) || r),
        (e = e || 'fx'),
        this.queue(e, function (e, t) {
          var n = ie.setTimeout(e, r);
          t.stop = function () {
            ie.clearTimeout(n);
          };
        })
      );
    }),
    (lt = C.createElement('input')),
    (ct = C.createElement('select').appendChild(C.createElement('option'))),
    (lt.type = 'checkbox'),
    (le.checkOn = '' !== lt.value),
    (le.optSelected = ct.selected),
    ((lt = C.createElement('input')).value = 't'),
    (lt.type = 'radio'),
    (le.radioValue = 't' === lt.value);
  var mt,
    xt = ce.expr.attrHandle;
  ce.fn.extend({
    attr: function (e, t) {
      return M(this, ce.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        ce.removeAttr(this, e);
      });
    },
  }),
    ce.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return 'undefined' == typeof e.getAttribute
            ? ce.prop(e, t, n)
            : ((1 === o && ce.isXMLDoc(e)) ||
                (i =
                  ce.attrHooks[t.toLowerCase()] ||
                  (ce.expr.match.bool.test(t) ? mt : void 0)),
              void 0 !== n
                ? null === n
                  ? void ce.removeAttr(e, t)
                  : i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ''), n)
                : i && 'get' in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = ce.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!le.radioValue && 'radio' === t && fe(e, 'input')) {
              var n = e.value;
              return e.setAttribute('type', t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(D);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (mt = {
      set: function (e, t, n) {
        return !1 === t ? ce.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    ce.each(ce.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = xt[t] || ce.find.attr;
      xt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = xt[o]),
            (xt[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (xt[o] = i)),
          r
        );
      };
    });
  var bt = /^(?:input|select|textarea|button)$/i,
    wt = /^(?:a|area)$/i;
  function Tt(e) {
    return (e.match(D) || []).join(' ');
  }
  function Ct(e) {
    return (e.getAttribute && e.getAttribute('class')) || '';
  }
  function kt(e) {
    return Array.isArray(e) ? e : ('string' == typeof e && e.match(D)) || [];
  }
  ce.fn.extend({
    prop: function (e, t) {
      return M(this, ce.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[ce.propFix[e] || e];
      });
    },
  }),
    ce.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && ce.isXMLDoc(e)) ||
              ((t = ce.propFix[t] || t), (i = ce.propHooks[t])),
            void 0 !== n
              ? i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && 'get' in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = ce.find.attr(e, 'tabindex');
            return t
              ? parseInt(t, 10)
              : bt.test(e.nodeName) || (wt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: {
        for: 'htmlFor',
        class: 'className',
      },
    }),
    le.optSelected ||
      (ce.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    ce.each(
      [
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable',
      ],
      function () {
        ce.propFix[this.toLowerCase()] = this;
      }
    ),
    ce.fn.extend({
      addClass: function (t) {
        var e, n, r, i, o, a;
        return v(t)
          ? this.each(function (e) {
              ce(this).addClass(t.call(this, e, Ct(this)));
            })
          : (e = kt(t)).length
          ? this.each(function () {
              if (
                ((r = Ct(this)), (n = 1 === this.nodeType && ' ' + Tt(r) + ' '))
              ) {
                for (o = 0; o < e.length; o++)
                  (i = e[o]), n.indexOf(' ' + i + ' ') < 0 && (n += i + ' ');
                (a = Tt(n)), r !== a && this.setAttribute('class', a);
              }
            })
          : this;
      },
      removeClass: function (t) {
        var e, n, r, i, o, a;
        return v(t)
          ? this.each(function (e) {
              ce(this).removeClass(t.call(this, e, Ct(this)));
            })
          : arguments.length
          ? (e = kt(t)).length
            ? this.each(function () {
                if (
                  ((r = Ct(this)),
                  (n = 1 === this.nodeType && ' ' + Tt(r) + ' '))
                ) {
                  for (o = 0; o < e.length; o++) {
                    i = e[o];
                    while (-1 < n.indexOf(' ' + i + ' '))
                      n = n.replace(' ' + i + ' ', ' ');
                  }
                  (a = Tt(n)), r !== a && this.setAttribute('class', a);
                }
              })
            : this
          : this.attr('class', '');
      },
      toggleClass: function (t, n) {
        var e,
          r,
          i,
          o,
          a = typeof t,
          s = 'string' === a || Array.isArray(t);
        return v(t)
          ? this.each(function (e) {
              ce(this).toggleClass(t.call(this, e, Ct(this), n), n);
            })
          : 'boolean' == typeof n && s
          ? n
            ? this.addClass(t)
            : this.removeClass(t)
          : ((e = kt(t)),
            this.each(function () {
              if (s)
                for (o = ce(this), i = 0; i < e.length; i++)
                  (r = e[i]), o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
              else
                (void 0 !== t && 'boolean' !== a) ||
                  ((r = Ct(this)) && _.set(this, '__className__', r),
                  this.setAttribute &&
                    this.setAttribute(
                      'class',
                      r || !1 === t ? '' : _.get(this, '__className__') || ''
                    ));
            }));
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = ' ' + e + ' ';
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (' ' + Tt(Ct(n)) + ' ').indexOf(t))
            return !0;
        return !1;
      },
    });
  var St = /\r/g;
  ce.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = v(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, ce(this).val()) : n)
                ? (t = '')
                : 'number' == typeof t
                ? (t += '')
                : Array.isArray(t) &&
                  (t = ce.map(t, function (e) {
                    return null == e ? '' : e + '';
                  })),
              ((r =
                ce.valHooks[this.type] ||
                ce.valHooks[this.nodeName.toLowerCase()]) &&
                'set' in r &&
                void 0 !== r.set(this, t, 'value')) ||
                (this.value = t));
          }))
        : t
        ? (r = ce.valHooks[t.type] || ce.valHooks[t.nodeName.toLowerCase()]) &&
          'get' in r &&
          void 0 !== (e = r.get(t, 'value'))
          ? e
          : 'string' == typeof (e = t.value)
          ? e.replace(St, '')
          : null == e
          ? ''
          : e
        : void 0;
    },
  }),
    ce.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = ce.find.attr(e, 'value');
            return null != t ? t : Tt(ce.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = 'select-one' === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !fe(n.parentNode, 'optgroup'))
              ) {
                if (((t = ce(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = ce.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < ce.inArray(ce.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    ce.each(['radio', 'checkbox'], function () {
      (ce.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < ce.inArray(ce(e).val(), t));
        },
      }),
        le.checkOn ||
          (ce.valHooks[this].get = function (e) {
            return null === e.getAttribute('value') ? 'on' : e.value;
          });
    });
  var Et = ie.location,
    jt = {
      guid: Date.now(),
    },
    At = /\?/;
  ce.parseXML = function (e) {
    var t, n;
    if (!e || 'string' != typeof e) return null;
    try {
      t = new ie.DOMParser().parseFromString(e, 'text/xml');
    } catch (e) {}
    return (
      (n = t && t.getElementsByTagName('parsererror')[0]),
      (t && !n) ||
        ce.error(
          'Invalid XML: ' +
            (n
              ? ce
                  .map(n.childNodes, function (e) {
                    return e.textContent;
                  })
                  .join('\n')
              : e)
        ),
      t
    );
  };
  var Dt = /^(?:focusinfocus|focusoutblur)$/,
    Nt = function (e) {
      e.stopPropagation();
    };
  ce.extend(ce.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || C],
        d = ue.call(e, 'type') ? e.type : e,
        h = ue.call(e, 'namespace') ? e.namespace.split('.') : [];
      if (
        ((o = f = a = n = n || C),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !Dt.test(d + ce.event.triggered) &&
          (-1 < d.indexOf('.') && ((d = (h = d.split('.')).shift()), h.sort()),
          (u = d.indexOf(':') < 0 && 'on' + d),
          ((e = e[ce.expando]
            ? e
            : new ce.Event(d, 'object' == typeof e && e)).isTrigger = r
            ? 2
            : 3),
          (e.namespace = h.join('.')),
          (e.rnamespace = e.namespace
            ? new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)')
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : ce.makeArray(t, [e])),
          (c = ce.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !y(n)) {
          for (
            s = c.delegateType || d, Dt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || C) &&
            p.push(a.defaultView || a.parentWindow || ie);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l =
              (_.get(o, 'events') || Object.create(null))[e.type] &&
              _.get(o, 'handle')) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              $(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !$(n) ||
            (u &&
              v(n[d]) &&
              !y(n) &&
              ((a = n[u]) && (n[u] = null),
              (ce.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, Nt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, Nt),
              (ce.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = ce.extend(new ce.Event(), n, {
        type: e,
        isSimulated: !0,
      });
      ce.event.trigger(r, null, t);
    },
  }),
    ce.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          ce.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return ce.event.trigger(e, t, n, !0);
      },
    });
  var qt = /\[\]$/,
    Lt = /\r?\n/g,
    Ht = /^(?:submit|button|image|reset|file)$/i,
    Ot = /^(?:input|select|textarea|keygen)/i;
  function Pt(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      ce.each(e, function (e, t) {
        r || qt.test(n)
          ? i(n, t)
          : Pt(
              n + '[' + ('object' == typeof t && null != t ? e : '') + ']',
              t,
              r,
              i
            );
      });
    else if (r || 'object' !== x(e)) i(n, e);
    else for (t in e) Pt(n + '[' + t + ']', e[t], r, i);
  }
  (ce.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = v(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
      };
    if (null == e) return '';
    if (Array.isArray(e) || (e.jquery && !ce.isPlainObject(e)))
      ce.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) Pt(n, e[n], t, i);
    return r.join('&');
  }),
    ce.fn.extend({
      serialize: function () {
        return ce.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = ce.prop(this, 'elements');
          return e ? ce.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !ce(this).is(':disabled') &&
              Ot.test(this.nodeName) &&
              !Ht.test(e) &&
              (this.checked || !we.test(e))
            );
          })
          .map(function (e, t) {
            var n = ce(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? ce.map(n, function (e) {
                  return {
                    name: t.name,
                    value: e.replace(Lt, '\r\n'),
                  };
                })
              : {
                  name: t.name,
                  value: n.replace(Lt, '\r\n'),
                };
          })
          .get();
      },
    });
  var Mt = /%20/g,
    Rt = /#.*$/,
    It = /([?&])_=[^&]*/,
    Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ft = /^(?:GET|HEAD)$/,
    $t = /^\/\//,
    Bt = {},
    _t = {},
    zt = '*/'.concat('*'),
    Xt = C.createElement('a');
  function Ut(o) {
    return function (e, t) {
      'string' != typeof e && ((t = e), (e = '*'));
      var n,
        r = 0,
        i = e.toLowerCase().match(D) || [];
      if (v(t))
        while ((n = i[r++]))
          '+' === n[0]
            ? ((n = n.slice(1) || '*'), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function Vt(t, i, o, a) {
    var s = {},
      u = t === _t;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        ce.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return 'string' != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s['*'] && l('*'));
  }
  function Gt(e, t) {
    var n,
      r,
      i = ce.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && ce.extend(!0, e, r), e;
  }
  (Xt.href = Et.href),
    ce.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Et.href,
        type: 'GET',
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Et.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: {
          '*': zt,
          text: 'text/plain',
          html: 'text/html',
          xml: 'application/xml, text/xml',
          json: 'application/json, text/javascript',
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/,
        },
        responseFields: {
          xml: 'responseXML',
          text: 'responseText',
          json: 'responseJSON',
        },
        converters: {
          '* text': String,
          'text html': !0,
          'text json': JSON.parse,
          'text xml': ce.parseXML,
        },
        flatOptions: {
          url: !0,
          context: !0,
        },
      },
      ajaxSetup: function (e, t) {
        return t ? Gt(Gt(e, ce.ajaxSettings), t) : Gt(ce.ajaxSettings, e);
      },
      ajaxPrefilter: Ut(Bt),
      ajaxTransport: Ut(_t),
      ajax: function (e, t) {
        'object' == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = ce.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? ce(y) : ce.event,
          x = ce.Deferred(),
          b = ce.Callbacks('once memory'),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = 'canceled',
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = Wt.exec(p)))
                    n[t[1].toLowerCase() + ' '] = (
                      n[t[1].toLowerCase() + ' '] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + ' '];
              }
              return null == t ? null : t.join(', ');
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || Et.href) + '').replace(
            $t,
            Et.protocol + '//'
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || '*').toLowerCase().match(D) || ['']),
          null == v.crossDomain)
        ) {
          r = C.createElement('a');
          try {
            (r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Xt.protocol + '//' + Xt.host != r.protocol + '//' + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            'string' != typeof v.data &&
            (v.data = ce.param(v.data, v.traditional)),
          Vt(Bt, v, t, T),
          h)
        )
          return T;
        for (i in ((g = ce.event && v.global) &&
          0 == ce.active++ &&
          ce.event.trigger('ajaxStart'),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Ft.test(v.type)),
        (f = v.url.replace(Rt, '')),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || '').indexOf(
                'application/x-www-form-urlencoded'
              ) &&
            (v.data = v.data.replace(Mt, '+'))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || 'string' == typeof v.data) &&
              ((f += (At.test(f) ? '&' : '?') + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(It, '$1')),
              (o = (At.test(f) ? '&' : '?') + '_=' + jt.guid++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (ce.lastModified[f] &&
            T.setRequestHeader('If-Modified-Since', ce.lastModified[f]),
          ce.etag[f] && T.setRequestHeader('If-None-Match', ce.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader('Content-Type', v.contentType),
        T.setRequestHeader(
          'Accept',
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ('*' !== v.dataTypes[0] ? ', ' + zt + '; q=0.01' : '')
            : v.accepts['*']
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort();
        if (
          ((u = 'abort'),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = Vt(_t, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger('ajaxSend', [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (d = ie.setTimeout(function () {
              T.abort('timeout');
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, 'No Transport');
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && ie.clearTimeout(d),
            (c = void 0),
            (p = r || ''),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ('*' === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader('Content-Type'));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + ' ' + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            !i &&
              -1 < ce.inArray('script', v.dataTypes) &&
              ce.inArray('json', v.dataTypes) < 0 &&
              (v.converters['text script'] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ('*' === o) o = u;
                  else if ('*' !== u && u !== o) {
                    if (!(a = l[u + ' ' + o] || l['* ' + o]))
                      for (i in l)
                        if (
                          (s = i.split(' '))[1] === o &&
                          (a = l[u + ' ' + s[0]] || l['* ' + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e['throws']) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: 'parsererror',
                            error: a
                              ? e
                              : 'No conversion from ' + u + ' to ' + o,
                          };
                        }
                  }
              return {
                state: 'success',
                data: t,
              };
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader('Last-Modified')) &&
                    (ce.lastModified[f] = u),
                  (u = T.getResponseHeader('etag')) && (ce.etag[f] = u)),
                204 === e || 'HEAD' === v.type
                  ? (l = 'nocontent')
                  : 304 === e
                  ? (l = 'notmodified')
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = 'error'), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ''),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? 'ajaxSuccess' : 'ajaxError', [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger('ajaxComplete', [T, v]),
              --ce.active || ce.event.trigger('ajaxStop')));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return ce.get(e, t, n, 'json');
      },
      getScript: function (e, t) {
        return ce.get(e, void 0, t, 'script');
      },
    }),
    ce.each(['get', 'post'], function (e, i) {
      ce[i] = function (e, t, n, r) {
        return (
          v(t) && ((r = r || n), (n = t), (t = void 0)),
          ce.ajax(
            ce.extend(
              {
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n,
              },
              ce.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    ce.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        'content-type' === t.toLowerCase() &&
          (e.contentType = e.headers[t] || '');
    }),
    (ce._evalUrl = function (e, t, n) {
      return ce.ajax({
        url: e,
        type: 'GET',
        dataType: 'script',
        cache: !0,
        async: !1,
        global: !1,
        converters: {
          'text script': function () {},
        },
        dataFilter: function (e) {
          ce.globalEval(e, t, n);
        },
      });
    }),
    ce.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (v(e) && (e = e.call(this[0])),
            (t = ce(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return v(n)
          ? this.each(function (e) {
              ce(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = ce(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = v(t);
        return this.each(function (e) {
          ce(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not('body')
            .each(function () {
              ce(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (ce.expr.pseudos.hidden = function (e) {
      return !ce.expr.pseudos.visible(e);
    }),
    (ce.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (ce.ajaxSettings.xhr = function () {
      try {
        return new ie.XMLHttpRequest();
      } catch (e) {}
    });
  var Yt = {
      0: 200,
      1223: 204,
    },
    Qt = ce.ajaxSettings.xhr();
  (le.cors = !!Qt && 'withCredentials' in Qt),
    (le.ajax = Qt = !!Qt),
    ce.ajaxTransport(function (i) {
      var o, a;
      if (le.cors || (Qt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e['X-Requested-With'] ||
              (e['X-Requested-With'] = 'XMLHttpRequest'),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  'abort' === e
                    ? r.abort()
                    : 'error' === e
                    ? 'number' != typeof r.status
                      ? t(0, 'error')
                      : t(r.status, r.statusText)
                    : t(
                        Yt[r.status] || r.status,
                        r.statusText,
                        'text' !== (r.responseType || 'text') ||
                          'string' != typeof r.responseText
                          ? {
                              binary: r.response,
                            }
                          : {
                              text: r.responseText,
                            },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o('error')),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      ie.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o('abort'));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    ce.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    ce.ajaxSetup({
      accepts: {
        script:
          'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
      },
      contents: {
        script: /\b(?:java|ecma)script\b/,
      },
      converters: {
        'text script': function (e) {
          return ce.globalEval(e), e;
        },
      },
    }),
    ce.ajaxPrefilter('script', function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
    }),
    ce.ajaxTransport('script', function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = ce('<script>')
              .attr(n.scriptAttrs || {})
              .prop({
                charset: n.scriptCharset,
                src: n.url,
              })
              .on(
                'load error',
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t('error' === e.type ? 404 : 200, e.type);
                })
              )),
              C.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Jt,
    Kt = [],
    Zt = /(=)\?(?=&|$)|\?\?/;
  ce.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = Kt.pop() || ce.expando + '_' + jt.guid++;
      return (this[e] = !0), e;
    },
  }),
    ce.ajaxPrefilter('json jsonp', function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Zt.test(e.url)
            ? 'url'
            : 'string' == typeof e.data &&
              0 ===
                (e.contentType || '').indexOf(
                  'application/x-www-form-urlencoded'
                ) &&
              Zt.test(e.data) &&
              'data');
      if (a || 'jsonp' === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Zt, '$1' + r))
            : !1 !== e.jsonp &&
              (e.url += (At.test(e.url) ? '&' : '?') + e.jsonp + '=' + r),
          (e.converters['script json'] = function () {
            return o || ce.error(r + ' was not called'), o[0];
          }),
          (e.dataTypes[0] = 'json'),
          (i = ie[r]),
          (ie[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? ce(ie).removeProp(r) : (ie[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Kt.push(r)),
              o && v(i) && i(o[0]),
              (o = i = void 0);
          }),
          'script'
        );
    }),
    (le.createHTMLDocument =
      (((Jt = C.implementation.createHTMLDocument('').body).innerHTML =
        '<form></form><form></form>'),
      2 === Jt.childNodes.length)),
    (ce.parseHTML = function (e, t, n) {
      return 'string' != typeof e
        ? []
        : ('boolean' == typeof t && ((n = t), (t = !1)),
          t ||
            (le.createHTMLDocument
              ? (((r = (t =
                  C.implementation.createHTMLDocument('')).createElement(
                  'base'
                )).href = C.location.href),
                t.head.appendChild(r))
              : (t = C)),
          (o = !n && []),
          (i = w.exec(e))
            ? [t.createElement(i[1])]
            : ((i = Ae([e], t, o)),
              o && o.length && ce(o).remove(),
              ce.merge([], i.childNodes)));
      var r, i, o;
    }),
    (ce.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(' ');
      return (
        -1 < s && ((r = Tt(e.slice(s))), (e = e.slice(0, s))),
        v(t)
          ? ((n = t), (t = void 0))
          : t && 'object' == typeof t && (i = 'POST'),
        0 < a.length &&
          ce
            .ajax({
              url: e,
              type: i || 'GET',
              dataType: 'html',
              data: t,
            })
            .done(function (e) {
              (o = arguments),
                a.html(r ? ce('<div>').append(ce.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (ce.expr.pseudos.animated = function (t) {
      return ce.grep(ce.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (ce.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = ce.css(e, 'position'),
          c = ce(e),
          f = {};
        'static' === l && (e.style.position = 'relative'),
          (s = c.offset()),
          (o = ce.css(e, 'top')),
          (u = ce.css(e, 'left')),
          ('absolute' === l || 'fixed' === l) && -1 < (o + u).indexOf('auto')
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          v(t) && (t = t.call(e, n, ce.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          'using' in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    ce.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                ce.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset,
              })
            : {
                top: 0,
                left: 0,
              }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = {
              top: 0,
              left: 0,
            };
          if ('fixed' === ce.css(r, 'position')) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              'static' === ce.css(e, 'position')
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = ce(e).offset()).top += ce.css(e, 'borderTopWidth', !0)),
              (i.left += ce.css(e, 'borderLeftWidth', !0)));
          }
          return {
            top: t.top - i.top - ce.css(r, 'marginTop', !0),
            left: t.left - i.left - ce.css(r, 'marginLeft', !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && 'static' === ce.css(e, 'position')) e = e.offsetParent;
          return e || J;
        });
      },
    }),
    ce.each(
      {
        scrollLeft: 'pageXOffset',
        scrollTop: 'pageYOffset',
      },
      function (t, i) {
        var o = 'pageYOffset' === i;
        ce.fn[t] = function (e) {
          return M(
            this,
            function (e, t, n) {
              var r;
              if (
                (y(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    ce.each(['top', 'left'], function (e, n) {
      ce.cssHooks[n] = Ye(le.pixelPosition, function (e, t) {
        if (t)
          return (t = Ge(e, n)), _e.test(t) ? ce(e).position()[n] + 'px' : t;
      });
    }),
    ce.each(
      {
        Height: 'height',
        Width: 'width',
      },
      function (a, s) {
        ce.each(
          {
            padding: 'inner' + a,
            content: s,
            '': 'outer' + a,
          },
          function (r, o) {
            ce.fn[o] = function (e, t) {
              var n = arguments.length && (r || 'boolean' != typeof e),
                i = r || (!0 === e || !0 === t ? 'margin' : 'border');
              return M(
                this,
                function (e, t, n) {
                  var r;
                  return y(e)
                    ? 0 === o.indexOf('outer')
                      ? e['inner' + a]
                      : e.document.documentElement['client' + a]
                    : 9 === e.nodeType
                    ? ((r = e.documentElement),
                      Math.max(
                        e.body['scroll' + a],
                        r['scroll' + a],
                        e.body['offset' + a],
                        r['offset' + a],
                        r['client' + a]
                      ))
                    : void 0 === n
                    ? ce.css(e, t, i)
                    : ce.style(e, t, n, i);
                },
                s,
                n ? e : void 0,
                n
              );
            };
          }
        );
      }
    ),
    ce.each(
      [
        'ajaxStart',
        'ajaxStop',
        'ajaxComplete',
        'ajaxError',
        'ajaxSuccess',
        'ajaxSend',
      ],
      function (e, t) {
        ce.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    ce.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, '**')
          : this.off(t, e || '**', n);
      },
      hover: function (e, t) {
        return this.on('mouseenter', e).on('mouseleave', t || e);
      },
    }),
    ce.each(
      'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
        ' '
      ),
      function (e, n) {
        ce.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    );
  var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  (ce.proxy = function (e, t) {
    var n, r, i;
    if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
      return (
        (r = ae.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(ae.call(arguments)));
        }).guid = e.guid =
          e.guid || ce.guid++),
        i
      );
  }),
    (ce.holdReady = function (e) {
      e ? ce.readyWait++ : ce.ready(!0);
    }),
    (ce.isArray = Array.isArray),
    (ce.parseJSON = JSON.parse),
    (ce.nodeName = fe),
    (ce.isFunction = v),
    (ce.isWindow = y),
    (ce.camelCase = F),
    (ce.type = x),
    (ce.now = Date.now),
    (ce.isNumeric = function (e) {
      var t = ce.type(e);
      return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
    }),
    (ce.trim = function (e) {
      return null == e ? '' : (e + '').replace(en, '$1');
    }),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function () {
        return ce;
      });
  var tn = ie.jQuery,
    nn = ie.$;
  return (
    (ce.noConflict = function (e) {
      return (
        ie.$ === ce && (ie.$ = nn),
        e && ie.jQuery === ce && (ie.jQuery = tn),
        ce
      );
    }),
    'undefined' == typeof e && (ie.jQuery = ie.$ = ce),
    ce
  );
});
jQuery.noConflict();

(function (factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports !== 'undefined') {
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
})(function ($) {
  'use strict';
  var SlickUABB = window.SlickUABB || {};
  SlickUABB = (function () {
    var instanceUid = 0;
    function SlickUABB(element, settings) {
      var _ = this,
        dataSettings;
      _.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: $(element),
        appendDots: $(element),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="fa fa-angle-left "></i></button>',
        nextArrow:
          '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="fa fa-angle-right "></i></button>',
        autoplay: !1,
        autoplaySpeed: 3000,
        centerMode: !1,
        centerPadding: '50px',
        cssEase: 'ease',
        customPaging: function (slider, i) {
          return $(
            '<button type="button" data-role="none" role="button" tabindex="0" />'
          ).text(i + 1);
        },
        dots: !1,
        dotsClass: 'slick-dots',
        draggable: !0,
        easing: 'linear',
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: 'ondemand',
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: 'window',
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: '',
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1000,
      };
      _.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1,
      };
      $.extend(_, _.initials);
      _.activeBreakpoint = null;
      _.animType = null;
      _.animProp = null;
      _.breakpoints = [];
      _.breakpointSettings = [];
      _.cssTransitions = !1;
      _.focussed = !1;
      _.interrupted = !1;
      _.hidden = 'hidden';
      _.paused = !0;
      _.positionProp = null;
      _.respondTo = null;
      _.rowCount = 1;
      _.shouldClick = !0;
      _.$slider = $(element);
      _.$slidesCache = null;
      _.transformType = null;
      _.transitionType = null;
      _.visibilityChange = 'visibilitychange';
      _.windowWidth = 0;
      _.windowTimer = null;
      dataSettings = $(element).data('slick') || {};
      _.options = $.extend({}, _.defaults, settings, dataSettings);
      _.currentSlide = _.options.initialSlide;
      _.originalSettings = _.options;
      if (typeof document.mozHidden !== 'undefined') {
        _.hidden = 'mozHidden';
        _.visibilityChange = 'mozvisibilitychange';
      } else if (typeof document.webkitHidden !== 'undefined') {
        _.hidden = 'webkitHidden';
        _.visibilityChange = 'webkitvisibilitychange';
      }
      _.autoPlay = $.proxy(_.autoPlay, _);
      _.autoPlayClear = $.proxy(_.autoPlayClear, _);
      _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
      _.changeSlide = $.proxy(_.changeSlide, _);
      _.clickHandler = $.proxy(_.clickHandler, _);
      _.selectHandler = $.proxy(_.selectHandler, _);
      _.setPosition = $.proxy(_.setPosition, _);
      _.swipeHandler = $.proxy(_.swipeHandler, _);
      _.dragHandler = $.proxy(_.dragHandler, _);
      _.keyHandler = $.proxy(_.keyHandler, _);
      _.instanceUid = instanceUid++;
      _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
      _.registerBreakpoints();
      _.init(!0);
    }
    return SlickUABB;
  })();
  SlickUABB.prototype.activateADA = function () {
    var _ = this;
    _.$slideTrack
      .find('.slick-active')
      .attr({
        'aria-hidden': 'false',
      })
      .find('a, input, button, select')
      .attr({
        tabindex: '0',
      });
  };
  SlickUABB.prototype.addSlide = SlickUABB.prototype.slickAdd = function (
    markup,
    index,
    addBefore
  ) {
    var _ = this;
    if (typeof index === 'boolean') {
      addBefore = index;
      index = null;
    } else if (index < 0 || index >= _.slideCount) {
      return !1;
    }
    _.unload();
    if (typeof index === 'number') {
      if (index === 0 && _.$slides.length === 0) {
        $(markup).appendTo(_.$slideTrack);
      } else if (addBefore) {
        $(markup).insertBefore(_.$slides.eq(index));
      } else {
        $(markup).insertAfter(_.$slides.eq(index));
      }
    } else {
      if (addBefore === !0) {
        $(markup).prependTo(_.$slideTrack);
      } else {
        $(markup).appendTo(_.$slideTrack);
      }
    }
    _.$slides = _.$slideTrack.children(this.options.slide);
    _.$slideTrack.children(this.options.slide).detach();
    _.$slideTrack.append(_.$slides);
    _.$slides.each(function (index, element) {
      $(element).attr('data-slick-index', index);
    });
    _.$slidesCache = _.$slides;
    _.reinit();
  };
  SlickUABB.prototype.animateHeight = function () {
    var _ = this;
    if (
      _.options.slidesToShow === 1 &&
      _.options.adaptiveHeight === !0 &&
      _.options.vertical === !1
    ) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(!0);
      _.$list.animate(
        {
          height: targetHeight,
        },
        _.options.speed
      );
    }
  };
  SlickUABB.prototype.animateSlide = function (targetLeft, callback) {
    var animProps = {},
      _ = this;
    _.animateHeight();
    if (_.options.rtl === !0 && _.options.vertical === !1) {
      targetLeft = -targetLeft;
    }
    if (_.transformsEnabled === !1) {
      if (_.options.vertical === !1) {
        _.$slideTrack.animate(
          {
            left: targetLeft,
          },
          _.options.speed,
          _.options.easing,
          callback
        );
      } else {
        _.$slideTrack.animate(
          {
            top: targetLeft,
          },
          _.options.speed,
          _.options.easing,
          callback
        );
      }
    } else {
      if (_.cssTransitions === !1) {
        if (_.options.rtl === !0) {
          _.currentLeft = -_.currentLeft;
        }
        $({
          animStart: _.currentLeft,
        }).animate(
          {
            animStart: targetLeft,
          },
          {
            duration: _.options.speed,
            easing: _.options.easing,
            step: function (now) {
              now = Math.ceil(now);
              if (_.options.vertical === !1) {
                animProps[_.animType] = 'translate(' + now + 'px, 0px)';
                _.$slideTrack.css(animProps);
              } else {
                animProps[_.animType] = 'translate(0px,' + now + 'px)';
                _.$slideTrack.css(animProps);
              }
            },
            complete: function () {
              if (callback) {
                callback.call();
              }
            },
          }
        );
      } else {
        _.applyTransition();
        targetLeft = Math.ceil(targetLeft);
        if (_.options.vertical === !1) {
          animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
        } else {
          animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
        }
        _.$slideTrack.css(animProps);
        if (callback) {
          setTimeout(function () {
            _.disableTransition();
            callback.call();
          }, _.options.speed);
        }
      }
    }
  };
  SlickUABB.prototype.getNavTarget = function () {
    var _ = this,
      asNavFor = _.options.asNavFor;
    if (asNavFor && asNavFor !== null) {
      asNavFor = $(asNavFor).not(_.$slider);
    }
    return asNavFor;
  };
  SlickUABB.prototype.asNavFor = function (index) {
    var _ = this,
      asNavFor = _.getNavTarget();
    if (asNavFor !== null && typeof asNavFor === 'object') {
      asNavFor.each(function () {
        var target = $(this).uabbslick('getSlick');
        if (!target.unslicked) {
          target.slideHandler(index, !0);
        }
      });
    }
  };
  SlickUABB.prototype.applyTransition = function (slide) {
    var _ = this,
      transition = {};
    if (_.options.fade === !1) {
      transition[_.transitionType] =
        _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
    } else {
      transition[_.transitionType] =
        'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
    }
    if (_.options.fade === !1) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };
  SlickUABB.prototype.autoPlay = function () {
    var _ = this;
    _.autoPlayClear();
    if (_.slideCount > _.options.slidesToShow) {
      _.autoPlayTimer = setInterval(
        _.autoPlayIterator,
        _.options.autoplaySpeed
      );
    }
  };
  SlickUABB.prototype.autoPlayClear = function () {
    var _ = this;
    if (_.autoPlayTimer) {
      clearInterval(_.autoPlayTimer);
    }
  };
  SlickUABB.prototype.autoPlayIterator = function () {
    var _ = this,
      slideTo = _.currentSlide + _.options.slidesToScroll;
    if (!_.paused && !_.interrupted && !_.focussed) {
      if (_.options.infinite === !1) {
        if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
          _.direction = 0;
        } else if (_.direction === 0) {
          slideTo = _.currentSlide - _.options.slidesToScroll;
          if (_.currentSlide - 1 === 0) {
            _.direction = 1;
          }
        }
      }
      _.slideHandler(slideTo);
    }
  };
  SlickUABB.prototype.buildArrows = function () {
    var _ = this;
    if (_.options.arrows === !0) {
      _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
      _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');
      if (_.slideCount > _.options.slidesToShow) {
        _.$prevArrow
          .removeClass('slick-hidden')
          .removeAttr('aria-hidden tabindex');
        _.$nextArrow
          .removeClass('slick-hidden')
          .removeAttr('aria-hidden tabindex');
        if (_.htmlExpr.test(_.options.prevArrow)) {
          _.$prevArrow.prependTo(_.options.appendArrows);
        }
        if (_.htmlExpr.test(_.options.nextArrow)) {
          _.$nextArrow.appendTo(_.options.appendArrows);
        }
        if (_.options.infinite !== !0) {
          _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
        }
      } else {
        _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({
          'aria-disabled': 'true',
          tabindex: '-1',
        });
      }
    }
  };
  SlickUABB.prototype.buildDots = function () {
    var _ = this,
      i,
      dot;
    if (_.options.dots === !0 && _.slideCount > _.options.slidesToShow) {
      _.$slider.addClass('slick-dotted');
      dot = $('<ul />').addClass(_.options.dotsClass);
      for (i = 0; i <= _.getDotCount(); i += 1) {
        dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
      }
      _.$dots = dot.appendTo(_.options.appendDots);
      _.$dots.find('li').first().addClass('slick-active');
    }
  };
  SlickUABB.prototype.buildOut = function () {
    var _ = this;
    _.$slides = _.$slider
      .children(_.options.slide + ':not(.slick-cloned)')
      .addClass('slick-slide');
    _.slideCount = _.$slides.length;
    _.$slides.each(function (index, element) {
      $(element)
        .attr('data-slick-index', index)
        .data('originalStyling', $(element).attr('style') || '');
    });
    _.$slider.addClass('slick-slider');
    _.$slideTrack =
      _.slideCount === 0
        ? $('<div class="slick-track"/>').appendTo(_.$slider)
        : _.$slides.wrapAll('<div class="slick-track"/>').parent();
    _.$list = _.$slideTrack
      .wrap('<div aria-live="polite" class="slick-list"/>')
      .parent();
    _.$slideTrack.css('opacity', 0);
    if (_.options.centerMode === !0 || _.options.swipeToSlide === !0) {
      _.options.slidesToScroll = 1;
    }
    $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');
    _.setupInfinite();
    _.buildArrows();
    _.buildDots();
    _.updateDots();
    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
    if (_.options.draggable === !0) {
      _.$list.addClass('draggable');
    }
  };
  SlickUABB.prototype.buildRows = function () {
    var _ = this,
      a,
      b,
      c,
      newSlides,
      numOfSlides,
      originalSlides,
      slidesPerSection;
    newSlides = document.createDocumentFragment();
    originalSlides = _.$slider.children();
    if (_.options.rows > 1) {
      slidesPerSection = _.options.slidesPerRow * _.options.rows;
      numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);
      for (a = 0; a < numOfSlides; a++) {
        var slide = document.createElement('div');
        for (b = 0; b < _.options.rows; b++) {
          var row = document.createElement('div');
          for (c = 0; c < _.options.slidesPerRow; c++) {
            var target =
              a * slidesPerSection + (b * _.options.slidesPerRow + c);
            if (originalSlides.get(target)) {
              row.appendChild(originalSlides.get(target));
            }
          }
          slide.appendChild(row);
        }
        newSlides.appendChild(slide);
      }
      _.$slider.empty().append(newSlides);
      _.$slider
        .children()
        .children()
        .children()
        .css({
          width: 100 / _.options.slidesPerRow + '%',
          display: 'inline-block',
        });
    }
  };
  SlickUABB.prototype.checkResponsive = function (initial, forceUpdate) {
    var _ = this,
      breakpoint,
      targetBreakpoint,
      respondToWidth,
      triggerBreakpoint = !1;
    var sliderWidth = _.$slider.width();
    var windowWidth = window.innerWidth || $(window).width();
    if (_.respondTo === 'window') {
      respondToWidth = windowWidth;
    } else if (_.respondTo === 'slider') {
      respondToWidth = sliderWidth;
    } else if (_.respondTo === 'min') {
      respondToWidth = Math.min(windowWidth, sliderWidth);
    }
    if (
      _.options.responsive &&
      _.options.responsive.length &&
      _.options.responsive !== null
    ) {
      targetBreakpoint = null;
      for (breakpoint in _.breakpoints) {
        if (_.breakpoints.hasOwnProperty(breakpoint)) {
          if (_.originalSettings.mobileFirst === !1) {
            if (respondToWidth < _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          } else {
            if (respondToWidth > _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          }
        }
      }
      if (targetBreakpoint !== null) {
        if (_.activeBreakpoint !== null) {
          if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
            _.activeBreakpoint = targetBreakpoint;
            if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
              _.unslick(targetBreakpoint);
            } else {
              _.options = $.extend(
                {},
                _.originalSettings,
                _.breakpointSettings[targetBreakpoint]
              );
              if (initial === !0) {
                _.currentSlide = _.options.initialSlide;
              }
              _.refresh(initial);
            }
            triggerBreakpoint = targetBreakpoint;
          }
        } else {
          _.activeBreakpoint = targetBreakpoint;
          if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
            _.unslick(targetBreakpoint);
          } else {
            _.options = $.extend(
              {},
              _.originalSettings,
              _.breakpointSettings[targetBreakpoint]
            );
            if (initial === !0) {
              _.currentSlide = _.options.initialSlide;
            }
            _.refresh(initial);
          }
          triggerBreakpoint = targetBreakpoint;
        }
      } else {
        if (_.activeBreakpoint !== null) {
          _.activeBreakpoint = null;
          _.options = _.originalSettings;
          if (initial === !0) {
            _.currentSlide = _.options.initialSlide;
          }
          _.refresh(initial);
          triggerBreakpoint = targetBreakpoint;
        }
      }
      if (!initial && triggerBreakpoint !== !1) {
        _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
      }
    }
  };
  SlickUABB.prototype.changeSlide = function (event, dontAnimate) {
    var _ = this,
      $target = $(event.currentTarget),
      indexOffset,
      slideOffset,
      unevenOffset;
    if ($target.is('a')) {
      event.preventDefault();
    }
    if (!$target.is('li')) {
      $target = $target.closest('li');
    }
    unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
    indexOffset = unevenOffset
      ? 0
      : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;
    switch (event.data.message) {
      case 'previous':
        slideOffset =
          indexOffset === 0
            ? _.options.slidesToScroll
            : _.options.slidesToShow - indexOffset;
        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide - slideOffset, !1, dontAnimate);
        }
        break;
      case 'next':
        slideOffset =
          indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide + slideOffset, !1, dontAnimate);
        }
        break;
      case 'index':
        var index =
          event.data.index === 0
            ? 0
            : event.data.index || $target.index() * _.options.slidesToScroll;
        _.slideHandler(_.checkNavigable(index), !1, dontAnimate);
        $target.children().trigger('focus');
        break;
      default:
        return;
    }
  };
  SlickUABB.prototype.checkNavigable = function (index) {
    var _ = this,
      navigables,
      prevNavigable;
    navigables = _.getNavigableIndexes();
    prevNavigable = 0;
    if (index > navigables[navigables.length - 1]) {
      index = navigables[navigables.length - 1];
    } else {
      for (var n in navigables) {
        if (index < navigables[n]) {
          index = prevNavigable;
          break;
        }
        prevNavigable = navigables[n];
      }
    }
    return index;
  };
  SlickUABB.prototype.cleanUpEvents = function () {
    var _ = this;
    if (_.options.dots && _.$dots !== null) {
      $('li', _.$dots)
        .off('click.slick', _.changeSlide)
        .off('mouseenter.slick', $.proxy(_.interrupt, _, !0))
        .off('mouseleave.slick', $.proxy(_.interrupt, _, !1));
      if (_.options.accessibility === !0) {
        _.$dots.off('keydown.slick', _.keyHandler);
      }
    }
    _.$slider.off('focus.slick blur.slick');
    if (_.options.arrows === !0 && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
      _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
    }
    _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
    _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
    _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
    _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);
    _.$list.off('click.slick', _.clickHandler);
    $(document).off(_.visibilityChange, _.visibility);
    _.cleanUpSlideEvents();
    if (_.options.accessibility === !0) {
      _.$list.off('keydown.slick', _.keyHandler);
    }
    if (_.options.focusOnSelect === !0) {
      $(_.$slideTrack).children().off('click.slick', _.selectHandler);
    }
    $(window).off(
      'orientationchange.slick.slick-' + _.instanceUid,
      _.orientationChange
    );
    $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);
    $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);
    $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
    $(document).off('.slick.slick-' + _.instanceUid, _.setPosition);
  };
  SlickUABB.prototype.cleanUpSlideEvents = function () {
    var _ = this;
    _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, !0));
    _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, !1));
  };
  SlickUABB.prototype.cleanUpRows = function () {
    var _ = this,
      originalSlides;
    if (_.options.rows > 1) {
      originalSlides = _.$slides.children().children();
      originalSlides.removeAttr('style');
      _.$slider.empty().append(originalSlides);
    }
  };
  SlickUABB.prototype.clickHandler = function (event) {
    var _ = this;
    if (_.shouldClick === !1) {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
    }
  };
  SlickUABB.prototype.destroy = function (refresh) {
    var _ = this;
    _.autoPlayClear();
    _.touchObject = {};
    _.cleanUpEvents();
    $('.slick-cloned', _.$slider).detach();
    if (_.$dots) {
      _.$dots.remove();
    }
    if (_.$prevArrow && _.$prevArrow.length) {
      _.$prevArrow
        .removeClass('slick-disabled slick-arrow slick-hidden')
        .removeAttr('aria-hidden aria-disabled tabindex')
        .css('display', '');
      if (_.htmlExpr.test(_.options.prevArrow)) {
        _.$prevArrow.remove();
      }
    }
    if (_.$nextArrow && _.$nextArrow.length) {
      _.$nextArrow
        .removeClass('slick-disabled slick-arrow slick-hidden')
        .removeAttr('aria-hidden aria-disabled tabindex')
        .css('display', '');
      if (_.htmlExpr.test(_.options.nextArrow)) {
        _.$nextArrow.remove();
      }
    }
    if (_.$slides) {
      _.$slides
        .removeClass(
          'slick-slide slick-active slick-center slick-visible slick-current'
        )
        .removeAttr('aria-hidden')
        .removeAttr('data-slick-index')
        .each(function () {
          $(this).attr('style', $(this).data('originalStyling'));
        });
      _.$slideTrack.children(this.options.slide).detach();
      _.$slideTrack.detach();
      _.$list.detach();
      _.$slider.append(_.$slides);
    }
    _.cleanUpRows();
    _.$slider.removeClass('slick-slider');
    _.$slider.removeClass('slick-initialized');
    _.$slider.removeClass('slick-dotted');
    _.unslicked = !0;
    if (!refresh) {
      _.$slider.trigger('destroy', [_]);
    }
  };
  SlickUABB.prototype.disableTransition = function (slide) {
    var _ = this,
      transition = {};
    transition[_.transitionType] = '';
    if (_.options.fade === !1) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };
  SlickUABB.prototype.fadeSlide = function (slideIndex, callback) {
    var _ = this;
    if (_.cssTransitions === !1) {
      _.$slides.eq(slideIndex).css({
        zIndex: _.options.zIndex,
      });
      _.$slides.eq(slideIndex).animate(
        {
          opacity: 1,
        },
        _.options.speed,
        _.options.easing,
        callback
      );
    } else {
      _.applyTransition(slideIndex);
      _.$slides.eq(slideIndex).css({
        opacity: 1,
        zIndex: _.options.zIndex,
      });
      if (callback) {
        setTimeout(function () {
          _.disableTransition(slideIndex);
          callback.call();
        }, _.options.speed);
      }
    }
  };
  SlickUABB.prototype.fadeSlideOut = function (slideIndex) {
    var _ = this;
    if (_.cssTransitions === !1) {
      _.$slides.eq(slideIndex).animate(
        {
          opacity: 0,
          zIndex: _.options.zIndex - 2,
        },
        _.options.speed,
        _.options.easing
      );
    } else {
      _.applyTransition(slideIndex);
      _.$slides.eq(slideIndex).css({
        opacity: 0,
        zIndex: _.options.zIndex - 2,
      });
    }
  };
  SlickUABB.prototype.filterSlides = SlickUABB.prototype.slickFilter =
    function (filter) {
      var _ = this;
      if (filter !== null) {
        _.$slidesCache = _.$slides;
        _.unload();
        _.$slideTrack.children(this.options.slide).detach();
        _.$slidesCache.filter(filter).appendTo(_.$slideTrack);
        _.reinit();
      }
    };
  SlickUABB.prototype.focusHandler = function () {
    var _ = this;
    _.$slider
      .off('focus.slick blur.slick')
      .on('focus.slick blur.slick', '*:not(.slick-arrow)', function (event) {
        event.stopImmediatePropagation();
        var $sf = $(this);
        setTimeout(function () {
          if (_.options.pauseOnFocus) {
            _.focussed = $sf.is(':focus');
            _.autoPlay();
          }
        }, 0);
      });
  };
  SlickUABB.prototype.getCurrent = SlickUABB.prototype.slickCurrentSlide =
    function () {
      var _ = this;
      return _.currentSlide;
    };
  SlickUABB.prototype.getDotCount = function () {
    var _ = this;
    var breakPoint = 0;
    var counter = 0;
    var pagerQty = 0;
    if (_.options.infinite === !0) {
      while (breakPoint < _.slideCount) {
        ++pagerQty;
        breakPoint = counter + _.options.slidesToScroll;
        counter +=
          _.options.slidesToScroll <= _.options.slidesToShow
            ? _.options.slidesToScroll
            : _.options.slidesToShow;
      }
    } else if (_.options.centerMode === !0) {
      pagerQty = _.slideCount;
    } else if (!_.options.asNavFor) {
      pagerQty =
        1 +
        Math.ceil(
          (_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll
        );
    } else {
      while (breakPoint < _.slideCount) {
        ++pagerQty;
        breakPoint = counter + _.options.slidesToScroll;
        counter +=
          _.options.slidesToScroll <= _.options.slidesToShow
            ? _.options.slidesToScroll
            : _.options.slidesToShow;
      }
    }
    return pagerQty - 1;
  };
  SlickUABB.prototype.getLeft = function (slideIndex) {
    var _ = this,
      targetLeft,
      verticalHeight,
      verticalOffset = 0,
      targetSlide;
    _.slideOffset = 0;
    verticalHeight = _.$slides.first().outerHeight(!0);
    if (_.options.infinite === !0) {
      if (_.slideCount > _.options.slidesToShow) {
        _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
        verticalOffset = verticalHeight * _.options.slidesToShow * -1;
      }
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        if (
          slideIndex + _.options.slidesToScroll > _.slideCount &&
          _.slideCount > _.options.slidesToShow
        ) {
          if (slideIndex > _.slideCount) {
            _.slideOffset =
              (_.options.slidesToShow - (slideIndex - _.slideCount)) *
              _.slideWidth *
              -1;
            verticalOffset =
              (_.options.slidesToShow - (slideIndex - _.slideCount)) *
              verticalHeight *
              -1;
          } else {
            _.slideOffset =
              (_.slideCount % _.options.slidesToScroll) * _.slideWidth * -1;
            verticalOffset =
              (_.slideCount % _.options.slidesToScroll) * verticalHeight * -1;
          }
        }
      }
    } else {
      if (slideIndex + _.options.slidesToShow > _.slideCount) {
        _.slideOffset =
          (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
        verticalOffset =
          (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
      }
    }
    if (_.slideCount <= _.options.slidesToShow) {
      _.slideOffset = 0;
      verticalOffset = 0;
    }
    if (_.options.centerMode === !0 && _.options.infinite === !0) {
      _.slideOffset +=
        _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
    } else if (_.options.centerMode === !0) {
      _.slideOffset = 0;
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
    }
    if (_.options.vertical === !1) {
      targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
    } else {
      targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
    }
    if (_.options.variableWidth === !0) {
      if (_.slideCount <= _.options.slidesToShow || _.options.infinite === !1) {
        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
      } else {
        targetSlide = _.$slideTrack
          .children('.slick-slide')
          .eq(slideIndex + _.options.slidesToShow);
      }
      if (_.options.rtl === !0) {
        if (targetSlide[0]) {
          targetLeft =
            (_.$slideTrack.width() -
              targetSlide[0].offsetLeft -
              targetSlide.width()) *
            -1;
        } else {
          targetLeft = 0;
        }
      } else {
        targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
      }
      if (_.options.centerMode === !0) {
        if (
          _.slideCount <= _.options.slidesToShow ||
          _.options.infinite === !1
        ) {
          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
        } else {
          targetSlide = _.$slideTrack
            .children('.slick-slide')
            .eq(slideIndex + _.options.slidesToShow + 1);
        }
        if (_.options.rtl === !0) {
          if (targetSlide[0]) {
            targetLeft =
              (_.$slideTrack.width() -
                targetSlide[0].offsetLeft -
                targetSlide.width()) *
              -1;
          } else {
            targetLeft = 0;
          }
        } else {
          targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
        }
        targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
      }
    }
    return targetLeft;
  };
  SlickUABB.prototype.getOption = SlickUABB.prototype.slickGetOption =
    function (option) {
      var _ = this;
      return _.options[option];
    };
  SlickUABB.prototype.getNavigableIndexes = function () {
    var _ = this,
      breakPoint = 0,
      counter = 0,
      indexes = [],
      max;
    if (_.options.infinite === !1) {
      max = _.slideCount;
    } else {
      breakPoint = _.options.slidesToScroll * -1;
      counter = _.options.slidesToScroll * -1;
      max = _.slideCount * 2;
    }
    while (breakPoint < max) {
      indexes.push(breakPoint);
      breakPoint = counter + _.options.slidesToScroll;
      counter +=
        _.options.slidesToScroll <= _.options.slidesToShow
          ? _.options.slidesToScroll
          : _.options.slidesToShow;
    }
    return indexes;
  };
  SlickUABB.prototype.getSlick = function () {
    return this;
  };
  SlickUABB.prototype.getSlideCount = function () {
    var _ = this,
      slidesTraversed,
      swipedSlide,
      centerOffset;
    centerOffset =
      _.options.centerMode === !0
        ? _.slideWidth * Math.floor(_.options.slidesToShow / 2)
        : 0;
    if (_.options.swipeToSlide === !0) {
      _.$slideTrack.find('.slick-slide').each(function (index, slide) {
        if (
          slide.offsetLeft - centerOffset + $(slide).outerWidth() / 2 >
          _.swipeLeft * -1
        ) {
          swipedSlide = slide;
          return !1;
        }
      });
      slidesTraversed =
        Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
      return slidesTraversed;
    } else {
      return _.options.slidesToScroll;
    }
  };
  SlickUABB.prototype.goTo = SlickUABB.prototype.slickGoTo = function (
    slide,
    dontAnimate
  ) {
    var _ = this;
    _.changeSlide(
      {
        data: {
          message: 'index',
          index: parseInt(slide),
        },
      },
      dontAnimate
    );
  };
  SlickUABB.prototype.init = function (creation) {
    var _ = this;
    if (!$(_.$slider).hasClass('slick-initialized')) {
      $(_.$slider).addClass('slick-initialized');
      _.buildRows();
      _.buildOut();
      _.setProps();
      _.startLoad();
      _.loadSlider();
      _.initializeEvents();
      _.updateArrows();
      _.updateDots();
      _.checkResponsive(!0);
      _.focusHandler();
    }
    if (creation) {
      _.$slider.trigger('init', [_]);
    }
    if (_.options.accessibility === !0) {
      _.initADA();
    }
    if (_.options.autoplay) {
      _.paused = !1;
      _.autoPlay();
    }
  };
  SlickUABB.prototype.initADA = function () {
    var _ = this,
      numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
      tabControlIndexes = _.getNavigableIndexes().filter(function (val) {
        return val >= 0 && val < _.slideCount;
      });
    if (_.$slides == null) {
      return !1;
    }
    _.$slides
      .add(_.$slideTrack.find('.slick-cloned'))
      .attr({
        'aria-hidden': 'true',
        tabindex: '-1',
      })
      .find('a, input, button, select')
      .attr({
        tabindex: '-1',
      });
    if (_.$dots !== null) {
      _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
        var slideControlIndex = tabControlIndexes.indexOf(i);
        $(this).attr({
          role: 'tabpanel',
          id: 'slick-slide' + _.instanceUid + i,
          tabindex: -1,
        });
        if (slideControlIndex !== -1) {
          var ariaButtonControl =
            'slick-slide-control' + _.instanceUid + slideControlIndex;
          if ($('#' + ariaButtonControl).length) {
            $(this).attr({
              'aria-describedby': ariaButtonControl,
            });
          }
        }
      });
      _.$dots
        .attr('role', 'tablist')
        .find('li')
        .each(function (i) {
          var mappedSlideIndex = tabControlIndexes[i];
          $(this).attr({
            role: 'presentation',
          });
          $(this)
            .find('button')
            .first()
            .attr({
              role: 'tab',
              id: 'slick-slide-control' + _.instanceUid + i,
              'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
              'aria-label': i + 1 + ' of ' + numDotGroups,
              'aria-selected': null,
              tabindex: '-1',
            });
        })
        .eq(_.currentSlide)
        .find('button')
        .attr({
          'aria-selected': 'true',
          tabindex: '0',
        })
        .end();
    }
    for (
      var i = _.currentSlide, max = i + _.options.slidesToShow;
      i < max;
      i++
    ) {
      if (_.options.focusOnChange) {
        _.$slides.eq(i).attr({
          tabindex: '0',
        });
      } else {
        _.$slides.eq(i).removeAttr('tabindex');
      }
    }
    _.activateADA();
  };
  SlickUABB.prototype.initArrowEvents = function () {
    var _ = this;
    if (_.options.arrows === !0 && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.off('click.slick').on(
        'click.slick',
        {
          message: 'previous',
        },
        _.changeSlide
      );
      _.$nextArrow.off('click.slick').on(
        'click.slick',
        {
          message: 'next',
        },
        _.changeSlide
      );
    }
  };
  SlickUABB.prototype.initDotEvents = function () {
    var _ = this;
    if (_.options.dots === !0 && _.slideCount > _.options.slidesToShow) {
      $('li', _.$dots).on(
        'click.slick',
        {
          message: 'index',
        },
        _.changeSlide
      );
      if (_.options.accessibility === !0) {
        _.$dots.on('keydown.slick', _.keyHandler);
      }
    }
    if (
      _.options.dots === !0 &&
      _.options.pauseOnDotsHover === !0 &&
      _.slideCount > _.options.slidesToShow
    ) {
      $('li', _.$dots)
        .on('mouseenter.slick', $.proxy(_.interrupt, _, !0))
        .on('mouseleave.slick', $.proxy(_.interrupt, _, !1));
    }
  };
  SlickUABB.prototype.initSlideEvents = function () {
    var _ = this;
    if (_.options.pauseOnHover) {
      _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, !0));
      _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, !1));
    }
  };
  SlickUABB.prototype.initializeEvents = function () {
    var _ = this;
    _.initArrowEvents();
    _.initDotEvents();
    _.initSlideEvents();
    _.$list.on(
      'touchstart.slick mousedown.slick',
      {
        action: 'start',
      },
      _.swipeHandler
    );
    _.$list.on(
      'touchmove.slick mousemove.slick',
      {
        action: 'move',
      },
      _.swipeHandler
    );
    _.$list.on(
      'touchend.slick mouseup.slick',
      {
        action: 'end',
      },
      _.swipeHandler
    );
    _.$list.on(
      'touchcancel.slick mouseleave.slick',
      {
        action: 'end',
      },
      _.swipeHandler
    );
    _.$list.on('click.slick', _.clickHandler);
    $(document).on(_.visibilityChange, $.proxy(_.visibility, _));
    if (_.options.accessibility === !0) {
      _.$list.on('keydown.slick', _.keyHandler);
    }
    if (_.options.focusOnSelect === !0) {
      $(_.$slideTrack).children().on('click.slick', _.selectHandler);
    }
    $(window).on(
      'orientationchange.slick.slick-' + _.instanceUid,
      $.proxy(_.orientationChange, _)
    );
    $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));
    $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);
    $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
    $(document).on('.slick.slick-' + _.instanceUid, _.setPosition);
  };
  SlickUABB.prototype.initUI = function () {
    var _ = this;
    if (_.options.arrows === !0 && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.show();
      _.$nextArrow.show();
    }
    if (_.options.dots === !0 && _.slideCount > _.options.slidesToShow) {
      _.$dots.show();
    }
  };
  SlickUABB.prototype.keyHandler = function (event) {
    var _ = this;
    if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
      if (event.keyCode === 37 && _.options.accessibility === !0) {
        _.changeSlide({
          data: {
            message: _.options.rtl === !0 ? 'next' : 'previous',
          },
        });
      } else if (event.keyCode === 39 && _.options.accessibility === !0) {
        _.changeSlide({
          data: {
            message: _.options.rtl === !0 ? 'previous' : 'next',
          },
        });
      }
    }
  };
  SlickUABB.prototype.lazyLoad = function () {
    var _ = this,
      loadRange,
      cloneRange,
      rangeStart,
      rangeEnd;
    function loadImages(imagesScope) {
      $('img[data-lazy]', imagesScope).each(function () {
        var image = $(this),
          imageSource = $(this).attr('data-lazy'),
          imageToLoad = document.createElement('img');
        imageToLoad.onload = function () {
          image.animate(
            {
              opacity: 0,
            },
            100,
            function () {
              image.attr('src', imageSource).animate(
                {
                  opacity: 1,
                },
                200,
                function () {
                  image.removeAttr('data-lazy').removeClass('slick-loading');
                }
              );
              _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
            }
          );
        };
        imageToLoad.onerror = function () {
          image
            .removeAttr('data-lazy')
            .removeClass('slick-loading')
            .addClass('slick-lazyload-error');
          _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
        };
        imageToLoad.src = imageSource;
      });
    }
    if (_.options.centerMode === !0) {
      if (_.options.infinite === !0) {
        rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
        rangeEnd = rangeStart + _.options.slidesToShow + 2;
      } else {
        rangeStart = Math.max(
          0,
          _.currentSlide - (_.options.slidesToShow / 2 + 1)
        );
        rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
      }
    } else {
      rangeStart = _.options.infinite
        ? _.options.slidesToShow + _.currentSlide
        : _.currentSlide;
      rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
      if (_.options.fade === !0) {
        if (rangeStart > 0) rangeStart--;
        if (rangeEnd <= _.slideCount) rangeEnd++;
      }
    }
    loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
    loadImages(loadRange);
    if (_.slideCount <= _.options.slidesToShow) {
      cloneRange = _.$slider.find('.slick-slide');
      loadImages(cloneRange);
    } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
      cloneRange = _.$slider
        .find('.slick-cloned')
        .slice(0, _.options.slidesToShow);
      loadImages(cloneRange);
    } else if (_.currentSlide === 0) {
      cloneRange = _.$slider
        .find('.slick-cloned')
        .slice(_.options.slidesToShow * -1);
      loadImages(cloneRange);
    }
  };
  SlickUABB.prototype.loadSlider = function () {
    var _ = this;
    _.setPosition();
    _.$slideTrack.css({
      opacity: 1,
    });
    _.$slider.removeClass('slick-loading');
    _.initUI();
    if (_.options.lazyLoad === 'progressive') {
      _.progressiveLazyLoad();
    }
  };
  SlickUABB.prototype.next = SlickUABB.prototype.slickNext = function () {
    var _ = this;
    _.changeSlide({
      data: {
        message: 'next',
      },
    });
  };
  SlickUABB.prototype.orientationChange = function () {
    var _ = this;
    _.checkResponsive();
    _.setPosition();
  };
  SlickUABB.prototype.pause = SlickUABB.prototype.slickPause = function () {
    var _ = this;
    _.autoPlayClear();
    _.paused = !0;
  };
  SlickUABB.prototype.play = SlickUABB.prototype.slickPlay = function () {
    var _ = this;
    _.autoPlay();
    _.options.autoplay = !0;
    _.paused = !1;
    _.focussed = !1;
    _.interrupted = !1;
  };
  SlickUABB.prototype.postSlide = function (index) {
    var _ = this;
    if (!_.unslicked) {
      _.$slider.trigger('afterChange', [_, index]);
      _.animating = !1;
      _.setPosition();
      _.swipeLeft = null;
      if (_.options.autoplay) {
        _.autoPlay();
      }
      if (_.options.accessibility === !0) {
        _.initADA();
      }
    }
  };
  SlickUABB.prototype.prev = SlickUABB.prototype.slickPrev = function () {
    var _ = this;
    _.changeSlide({
      data: {
        message: 'previous',
      },
    });
  };
  SlickUABB.prototype.preventDefault = function (event) {
    event.preventDefault();
  };
  SlickUABB.prototype.progressiveLazyLoad = function (tryCount) {
    tryCount = tryCount || 1;
    var _ = this,
      $imgsToLoad = $('img[data-lazy]', _.$slider),
      image,
      imageSource,
      imageToLoad;
    if ($imgsToLoad.length) {
      image = $imgsToLoad.first();
      imageSource = image.attr('data-lazy');
      imageToLoad = document.createElement('img');
      imageToLoad.onload = function () {
        image
          .attr('src', imageSource)
          .removeAttr('data-lazy')
          .removeClass('slick-loading');
        if (_.options.adaptiveHeight === !0) {
          _.setPosition();
        }
        _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
        _.progressiveLazyLoad();
      };
      imageToLoad.onerror = function () {
        if (tryCount < 3) {
          setTimeout(function () {
            _.progressiveLazyLoad(tryCount + 1);
          }, 500);
        } else {
          image
            .removeAttr('data-lazy')
            .removeClass('slick-loading')
            .addClass('slick-lazyload-error');
          _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
          _.progressiveLazyLoad();
        }
      };
      imageToLoad.src = imageSource;
    } else {
      _.$slider.trigger('allImagesLoaded', [_]);
    }
  };
  SlickUABB.prototype.refresh = function (initializing) {
    var _ = this,
      currentSlide,
      lastVisibleIndex;
    lastVisibleIndex = _.slideCount - _.options.slidesToShow;
    if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
      _.currentSlide = lastVisibleIndex;
    }
    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }
    currentSlide = _.currentSlide;
    _.destroy(!0);
    $.extend(_, _.initials, {
      currentSlide: currentSlide,
    });
    _.init();
    if (!initializing) {
      _.changeSlide(
        {
          data: {
            message: 'index',
            index: currentSlide,
          },
        },
        !1
      );
    }
  };
  SlickUABB.prototype.registerBreakpoints = function () {
    var _ = this,
      breakpoint,
      currentBreakpoint,
      l,
      responsiveSettings = _.options.responsive || null;
    if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {
      _.respondTo = _.options.respondTo || 'window';
      for (breakpoint in responsiveSettings) {
        l = _.breakpoints.length - 1;
        currentBreakpoint = responsiveSettings[breakpoint].breakpoint;
        if (responsiveSettings.hasOwnProperty(breakpoint)) {
          while (l >= 0) {
            if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
              _.breakpoints.splice(l, 1);
            }
            l--;
          }
          _.breakpoints.push(currentBreakpoint);
          _.breakpointSettings[currentBreakpoint] =
            responsiveSettings[breakpoint].settings;
        }
      }
      _.breakpoints.sort(function (a, b) {
        return _.options.mobileFirst ? a - b : b - a;
      });
    }
  };
  SlickUABB.prototype.reinit = function () {
    var _ = this;
    _.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide');
    _.slideCount = _.$slides.length;
    if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
      _.currentSlide = _.currentSlide - _.options.slidesToScroll;
    }
    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }
    _.registerBreakpoints();
    _.setProps();
    _.setupInfinite();
    _.buildArrows();
    _.updateArrows();
    _.initArrowEvents();
    _.buildDots();
    _.updateDots();
    _.initDotEvents();
    _.cleanUpSlideEvents();
    _.initSlideEvents();
    _.checkResponsive(!1, !0);
    if (_.options.focusOnSelect === !0) {
      $(_.$slideTrack).children().on('click.slick', _.selectHandler);
    }
    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
    _.setPosition();
    _.focusHandler();
    _.paused = !_.options.autoplay;
    _.autoPlay();
    _.$slider.trigger('reInit', [_]);
  };
  SlickUABB.prototype.resize = function () {
    var _ = this;
    if ($(window).width() !== _.windowWidth) {
      clearTimeout(_.windowDelay);
      _.windowDelay = window.setTimeout(function () {
        _.windowWidth = $(window).width();
        _.checkResponsive();
        if (!_.unslicked) {
          _.setPosition();
        }
      }, 50);
    }
  };
  SlickUABB.prototype.removeSlide = SlickUABB.prototype.slickRemove = function (
    index,
    removeBefore,
    removeAll
  ) {
    var _ = this;
    if (typeof index === 'boolean') {
      removeBefore = index;
      index = removeBefore === !0 ? 0 : _.slideCount - 1;
    } else {
      index = removeBefore === !0 ? --index : index;
    }
    if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
      return !1;
    }
    _.unload();
    if (removeAll === !0) {
      _.$slideTrack.children().remove();
    } else {
      _.$slideTrack.children(this.options.slide).eq(index).remove();
    }
    _.$slides = _.$slideTrack.children(this.options.slide);
    _.$slideTrack.children(this.options.slide).detach();
    _.$slideTrack.append(_.$slides);
    _.$slidesCache = _.$slides;
    _.reinit();
  };
  SlickUABB.prototype.setCSS = function (position) {
    var _ = this,
      positionProps = {},
      x,
      y;
    if (_.options.rtl === !0) {
      position = -position;
    }
    x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
    y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';
    positionProps[_.positionProp] = position;
    if (_.transformsEnabled === !1) {
      _.$slideTrack.css(positionProps);
    } else {
      positionProps = {};
      if (_.cssTransitions === !1) {
        positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
        _.$slideTrack.css(positionProps);
      } else {
        positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
        _.$slideTrack.css(positionProps);
      }
    }
  };
  SlickUABB.prototype.setDimensions = function () {
    var _ = this;
    if (_.options.vertical === !1) {
      if (_.options.centerMode === !0) {
        _.$list.css({
          padding: '0px ' + _.options.centerPadding,
        });
      }
    } else {
      _.$list.height(
        _.$slides.first().outerHeight(!0) * _.options.slidesToShow
      );
      if (_.options.centerMode === !0) {
        _.$list.css({
          padding: _.options.centerPadding + ' 0px',
        });
      }
    }
    _.listWidth = _.$list.width();
    _.listHeight = _.$list.height();
    if (_.options.vertical === !1 && _.options.variableWidth === !1) {
      _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
      _.$slideTrack.width(
        Math.ceil(_.slideWidth * _.$slideTrack.children('.slick-slide').length)
      );
    } else if (_.options.variableWidth === !0) {
      _.$slideTrack.width(5000 * _.slideCount);
    } else {
      _.slideWidth = Math.ceil(_.listWidth);
      _.$slideTrack.height(
        Math.ceil(
          _.$slides.first().outerHeight(!0) *
            _.$slideTrack.children('.slick-slide').length
        )
      );
    }
    var offset = _.$slides.first().outerWidth(!0) - _.$slides.first().width();
    if (_.options.variableWidth === !1)
      _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
  };
  SlickUABB.prototype.setFade = function () {
    var _ = this,
      targetLeft;
    _.$slides.each(function (index, element) {
      targetLeft = _.slideWidth * index * -1;
      if (_.options.rtl === !0) {
        $(element).css({
          position: 'relative',
          right: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0,
        });
      } else {
        $(element).css({
          position: 'relative',
          left: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0,
        });
      }
    });
    _.$slides.eq(_.currentSlide).css({
      zIndex: _.options.zIndex - 1,
      opacity: 1,
    });
  };
  SlickUABB.prototype.setHeight = function () {
    var _ = this;
    if (
      _.options.slidesToShow === 1 &&
      _.options.adaptiveHeight === !0 &&
      _.options.vertical === !1
    ) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(!0);
      _.$list.css('height', targetHeight);
    }
  };
  SlickUABB.prototype.setOption = SlickUABB.prototype.slickSetOption =
    function () {
      var _ = this,
        l,
        item,
        option,
        value,
        refresh = !1,
        type;
      if ($.type(arguments[0]) === 'object') {
        option = arguments[0];
        refresh = arguments[1];
        type = 'multiple';
      } else if ($.type(arguments[0]) === 'string') {
        option = arguments[0];
        value = arguments[1];
        refresh = arguments[2];
        if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {
          type = 'responsive';
        } else if (typeof arguments[1] !== 'undefined') {
          type = 'single';
        }
      }
      if (type === 'single') {
        _.options[option] = value;
      } else if (type === 'multiple') {
        $.each(option, function (opt, val) {
          _.options[opt] = val;
        });
      } else if (type === 'responsive') {
        for (item in value) {
          if ($.type(_.options.responsive) !== 'array') {
            _.options.responsive = [value[item]];
          } else {
            l = _.options.responsive.length - 1;
            while (l >= 0) {
              if (
                _.options.responsive[l].breakpoint === value[item].breakpoint
              ) {
                _.options.responsive.splice(l, 1);
              }
              l--;
            }
            _.options.responsive.push(value[item]);
          }
        }
      }
      if (refresh) {
        _.unload();
        _.reinit();
      }
    };
  SlickUABB.prototype.setPosition = function () {
    var _ = this;
    _.setDimensions();
    _.setHeight();
    if (_.options.fade === !1) {
      _.setCSS(_.getLeft(_.currentSlide));
    } else {
      _.setFade();
    }
    _.$slider.trigger('setPosition', [_]);
  };
  SlickUABB.prototype.setProps = function () {
    var _ = this,
      bodyStyle = document.body.style;
    _.positionProp = _.options.vertical === !0 ? 'top' : 'left';
    if (_.positionProp === 'top') {
      _.$slider.addClass('slick-vertical');
    } else {
      _.$slider.removeClass('slick-vertical');
    }
    if (
      bodyStyle.WebkitTransition !== undefined ||
      bodyStyle.MozTransition !== undefined ||
      bodyStyle.msTransition !== undefined
    ) {
      if (_.options.useCSS === !0) {
        _.cssTransitions = !0;
      }
    }
    if (_.options.fade) {
      if (typeof _.options.zIndex === 'number') {
        if (_.options.zIndex < 3) {
          _.options.zIndex = 3;
        }
      } else {
        _.options.zIndex = _.defaults.zIndex;
      }
    }
    if (bodyStyle.OTransform !== undefined) {
      _.animType = 'OTransform';
      _.transformType = '-o-transform';
      _.transitionType = 'OTransition';
      if (
        bodyStyle.perspectiveProperty === undefined &&
        bodyStyle.webkitPerspective === undefined
      )
        _.animType = !1;
    }
    if (bodyStyle.MozTransform !== undefined) {
      _.animType = 'MozTransform';
      _.transformType = '-moz-transform';
      _.transitionType = 'MozTransition';
      if (
        bodyStyle.perspectiveProperty === undefined &&
        bodyStyle.MozPerspective === undefined
      )
        _.animType = !1;
    }
    if (bodyStyle.webkitTransform !== undefined) {
      _.animType = 'webkitTransform';
      _.transformType = '-webkit-transform';
      _.transitionType = 'webkitTransition';
      if (
        bodyStyle.perspectiveProperty === undefined &&
        bodyStyle.webkitPerspective === undefined
      )
        _.animType = !1;
    }
    if (bodyStyle.msTransform !== undefined) {
      _.animType = 'msTransform';
      _.transformType = '-ms-transform';
      _.transitionType = 'msTransition';
      if (bodyStyle.msTransform === undefined) _.animType = !1;
    }
    if (bodyStyle.transform !== undefined && _.animType !== !1) {
      _.animType = 'transform';
      _.transformType = 'transform';
      _.transitionType = 'transition';
    }
    _.transformsEnabled =
      _.options.useTransform && _.animType !== null && _.animType !== !1;
  };
  SlickUABB.prototype.setSlideClasses = function (index) {
    var _ = this,
      centerOffset,
      allSlides,
      indexOffset,
      remainder;
    allSlides = _.$slider
      .find('.slick-slide')
      .removeClass('slick-active slick-center slick-current')
      .attr('aria-hidden', 'true');
    _.$slides.eq(index).addClass('slick-current');
    if (_.options.centerMode === !0) {
      centerOffset = Math.floor(_.options.slidesToShow / 2);
      if (_.options.infinite === !0) {
        if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {
          _.$slides
            .slice(index - centerOffset, index + centerOffset + 1)
            .addClass('slick-active')
            .attr('aria-hidden', 'false');
        } else {
          indexOffset = _.options.slidesToShow + index;
          allSlides
            .slice(
              indexOffset - centerOffset + 1,
              indexOffset + centerOffset + 2
            )
            .addClass('slick-active')
            .attr('aria-hidden', 'false');
        }
        if (index === 0) {
          allSlides
            .eq(allSlides.length - 1 - _.options.slidesToShow)
            .addClass('slick-center');
        } else if (index === _.slideCount - 1) {
          allSlides.eq(_.options.slidesToShow).addClass('slick-center');
        }
      }
      _.$slides.eq(index).addClass('slick-center');
    } else {
      if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {
        _.$slides
          .slice(index, index + _.options.slidesToShow)
          .addClass('slick-active')
          .attr('aria-hidden', 'false');
      } else if (allSlides.length <= _.options.slidesToShow) {
        allSlides.addClass('slick-active').attr('aria-hidden', 'false');
      } else {
        remainder = _.slideCount % _.options.slidesToShow;
        indexOffset =
          _.options.infinite === !0 ? _.options.slidesToShow + index : index;
        if (
          _.options.slidesToShow == _.options.slidesToScroll &&
          _.slideCount - index < _.options.slidesToShow
        ) {
          allSlides
            .slice(
              indexOffset - (_.options.slidesToShow - remainder),
              indexOffset + remainder
            )
            .addClass('slick-active')
            .attr('aria-hidden', 'false');
        } else {
          allSlides
            .slice(indexOffset, indexOffset + _.options.slidesToShow)
            .addClass('slick-active')
            .attr('aria-hidden', 'false');
        }
      }
    }
    if (_.options.lazyLoad === 'ondemand') {
      _.lazyLoad();
    }
  };
  SlickUABB.prototype.setupInfinite = function () {
    var _ = this,
      i,
      slideIndex,
      infiniteCount;
    if (_.options.fade === !0) {
      _.options.centerMode = !1;
    }
    if (_.options.infinite === !0 && _.options.fade === !1) {
      slideIndex = null;
      if (_.slideCount > _.options.slidesToShow) {
        if (_.options.centerMode === !0) {
          infiniteCount = _.options.slidesToShow + 1;
        } else {
          infiniteCount = _.options.slidesToShow;
        }
        for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
          slideIndex = i - 1;
          $(_.$slides[slideIndex])
            .clone(!0)
            .attr('id', '')
            .attr('data-slick-index', slideIndex - _.slideCount)
            .prependTo(_.$slideTrack)
            .addClass('slick-cloned');
        }
        for (i = 0; i < infiniteCount; i += 1) {
          slideIndex = i;
          $(_.$slides[slideIndex])
            .clone(!0)
            .attr('id', '')
            .attr('data-slick-index', slideIndex + _.slideCount)
            .appendTo(_.$slideTrack)
            .addClass('slick-cloned');
        }
        _.$slideTrack
          .find('.slick-cloned')
          .find('[id]')
          .each(function () {
            $(this).attr('id', '');
          });
      }
    }
  };
  SlickUABB.prototype.interrupt = function (toggle) {
    var _ = this;
    if (!toggle) {
      _.autoPlay();
    }
    _.interrupted = toggle;
  };
  SlickUABB.prototype.selectHandler = function (event) {
    var _ = this;
    var targetElement = $(event.target).is('.slick-slide')
      ? $(event.target)
      : $(event.target).parents('.slick-slide');
    var index = parseInt(targetElement.attr('data-slick-index'));
    if (!index) index = 0;
    if (_.slideCount <= _.options.slidesToShow) {
      _.setSlideClasses(index);
      _.asNavFor(index);
      return;
    }
    _.slideHandler(index);
  };
  SlickUABB.prototype.slideHandler = function (index, sync, dontAnimate) {
    var targetSlide,
      animSlide,
      oldSlide,
      slideLeft,
      targetLeft = null,
      _ = this,
      navTarget;
    sync = sync || !1;
    if (_.animating === !0 && _.options.waitForAnimate === !0) {
      return;
    }
    if (_.options.fade === !0 && _.currentSlide === index) {
      return;
    }
    if (_.slideCount <= _.options.slidesToShow) {
      return;
    }
    if (sync === !1) {
      _.asNavFor(index);
    }
    targetSlide = index;
    targetLeft = _.getLeft(targetSlide);
    slideLeft = _.getLeft(_.currentSlide);
    _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;
    if (
      _.options.infinite === !1 &&
      _.options.centerMode === !1 &&
      (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)
    ) {
      if (_.options.fade === !1) {
        targetSlide = _.currentSlide;
        if (dontAnimate !== !0) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }
      return;
    } else if (
      _.options.infinite === !1 &&
      _.options.centerMode === !0 &&
      (index < 0 || index > _.slideCount - _.options.slidesToScroll)
    ) {
      if (_.options.fade === !1) {
        targetSlide = _.currentSlide;
        if (dontAnimate !== !0) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }
      return;
    }
    if (_.options.autoplay) {
      clearInterval(_.autoPlayTimer);
    }
    if (targetSlide < 0) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
      } else {
        animSlide = _.slideCount + targetSlide;
      }
    } else if (targetSlide >= _.slideCount) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = 0;
      } else {
        animSlide = targetSlide - _.slideCount;
      }
    } else {
      animSlide = targetSlide;
    }
    _.animating = !0;
    _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);
    oldSlide = _.currentSlide;
    _.currentSlide = animSlide;
    _.setSlideClasses(_.currentSlide);
    if (_.options.asNavFor) {
      navTarget = _.getNavTarget();
      navTarget = navTarget.uabbslick('getSlick');
      if (navTarget.slideCount <= navTarget.options.slidesToShow) {
        navTarget.setSlideClasses(_.currentSlide);
      }
    }
    _.updateDots();
    _.updateArrows();
    if (_.options.fade === !0) {
      if (dontAnimate !== !0) {
        _.fadeSlideOut(oldSlide);
        _.fadeSlide(animSlide, function () {
          _.postSlide(animSlide);
        });
      } else {
        _.postSlide(animSlide);
      }
      _.animateHeight();
      return;
    }
    if (dontAnimate !== !0) {
      _.animateSlide(targetLeft, function () {
        _.postSlide(animSlide);
      });
    } else {
      _.postSlide(animSlide);
    }
  };
  SlickUABB.prototype.startLoad = function () {
    var _ = this;
    if (_.options.arrows === !0 && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.hide();
      _.$nextArrow.hide();
    }
    if (_.options.dots === !0 && _.slideCount > _.options.slidesToShow) {
      _.$dots.hide();
    }
    _.$slider.addClass('slick-loading');
  };
  SlickUABB.prototype.swipeDirection = function () {
    var xDist,
      yDist,
      r,
      swipeAngle,
      _ = this;
    xDist = _.touchObject.startX - _.touchObject.curX;
    yDist = _.touchObject.startY - _.touchObject.curY;
    r = Math.atan2(yDist, xDist);
    swipeAngle = Math.round((r * 180) / Math.PI);
    if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle);
    }
    if (swipeAngle <= 45 && swipeAngle >= 0) {
      return _.options.rtl === !1 ? 'left' : 'right';
    }
    if (swipeAngle <= 360 && swipeAngle >= 315) {
      return _.options.rtl === !1 ? 'left' : 'right';
    }
    if (swipeAngle >= 135 && swipeAngle <= 225) {
      return _.options.rtl === !1 ? 'right' : 'left';
    }
    if (_.options.verticalSwiping === !0) {
      if (swipeAngle >= 35 && swipeAngle <= 135) {
        return 'down';
      } else {
        return 'up';
      }
    }
    return 'vertical';
  };
  SlickUABB.prototype.swipeEnd = function (event) {
    var _ = this,
      slideCount,
      direction;
    _.dragging = !1;
    _.interrupted = !1;
    _.shouldClick = _.touchObject.swipeLength > 10 ? !1 : !0;
    if (_.touchObject.curX === undefined) {
      return !1;
    }
    if (_.touchObject.edgeHit === !0) {
      _.$slider.trigger('edge', [_, _.swipeDirection()]);
    }
    if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
      direction = _.swipeDirection();
      switch (direction) {
        case 'left':
        case 'down':
          slideCount = _.options.swipeToSlide
            ? _.checkNavigable(_.currentSlide + _.getSlideCount())
            : _.currentSlide + _.getSlideCount();
          _.currentDirection = 0;
          break;
        case 'right':
        case 'up':
          slideCount = _.options.swipeToSlide
            ? _.checkNavigable(_.currentSlide - _.getSlideCount())
            : _.currentSlide - _.getSlideCount();
          _.currentDirection = 1;
          break;
        default:
      }
      if (direction != 'vertical') {
        _.slideHandler(slideCount);
        _.touchObject = {};
        _.$slider.trigger('swipe', [_, direction]);
      }
    } else {
      if (_.touchObject.startX !== _.touchObject.curX) {
        _.slideHandler(_.currentSlide);
        _.touchObject = {};
      }
    }
  };
  SlickUABB.prototype.swipeHandler = function (event) {
    var _ = this;
    if (
      _.options.swipe === !1 ||
      ('ontouchend' in document && _.options.swipe === !1)
    ) {
      return;
    } else if (
      _.options.draggable === !1 &&
      event.type.indexOf('mouse') !== -1
    ) {
      return;
    }
    _.touchObject.fingerCount =
      event.originalEvent && event.originalEvent.touches !== undefined
        ? event.originalEvent.touches.length
        : 1;
    _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;
    if (_.options.verticalSwiping === !0) {
      _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
    }
    switch (event.data.action) {
      case 'start':
        _.swipeStart(event);
        break;
      case 'move':
        _.swipeMove(event);
        break;
      case 'end':
        _.swipeEnd(event);
        break;
    }
  };
  SlickUABB.prototype.swipeMove = function (event) {
    var _ = this,
      edgeWasHit = !1,
      curLeft,
      swipeDirection,
      swipeLength,
      positionOffset,
      touches;
    touches =
      event.originalEvent !== undefined ? event.originalEvent.touches : null;
    if (!_.dragging || (touches && touches.length !== 1)) {
      return !1;
    }
    curLeft = _.getLeft(_.currentSlide);
    _.touchObject.curX =
      touches !== undefined ? touches[0].pageX : event.clientX;
    _.touchObject.curY =
      touches !== undefined ? touches[0].pageY : event.clientY;
    _.touchObject.swipeLength = Math.round(
      Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2))
    );
    if (_.options.verticalSwiping === !0) {
      _.touchObject.swipeLength = Math.round(
        Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2))
      );
    }
    swipeDirection = _.swipeDirection();
    if (swipeDirection === 'vertical') {
      return;
    }
    if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
      event.preventDefault();
    }
    positionOffset =
      (_.options.rtl === !1 ? 1 : -1) *
      (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
    if (_.options.verticalSwiping === !0) {
      positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
    }
    swipeLength = _.touchObject.swipeLength;
    _.touchObject.edgeHit = !1;
    if (_.options.infinite === !1) {
      if (
        (_.currentSlide === 0 && swipeDirection === 'right') ||
        (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')
      ) {
        swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
        _.touchObject.edgeHit = !0;
      }
    }
    if (_.options.vertical === !1) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    } else {
      _.swipeLeft =
        curLeft +
        swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
    }
    if (_.options.verticalSwiping === !0) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    }
    if (_.options.fade === !0 || _.options.touchMove === !1) {
      return !1;
    }
    if (_.animating === !0) {
      _.swipeLeft = null;
      return !1;
    }
    _.setCSS(_.swipeLeft);
  };
  SlickUABB.prototype.swipeStart = function (event) {
    var _ = this,
      touches;
    _.interrupted = !0;
    if (
      _.touchObject.fingerCount !== 1 ||
      _.slideCount <= _.options.slidesToShow
    ) {
      _.touchObject = {};
      return !1;
    }
    if (
      event.originalEvent !== undefined &&
      event.originalEvent.touches !== undefined
    ) {
      touches = event.originalEvent.touches[0];
    }
    _.touchObject.startX = _.touchObject.curX =
      touches !== undefined ? touches.pageX : event.clientX;
    _.touchObject.startY = _.touchObject.curY =
      touches !== undefined ? touches.pageY : event.clientY;
    _.dragging = !0;
  };
  SlickUABB.prototype.unfilterSlides = SlickUABB.prototype.slickUnfilter =
    function () {
      var _ = this;
      if (_.$slidesCache !== null) {
        _.unload();
        _.$slideTrack.children(this.options.slide).detach();
        _.$slidesCache.appendTo(_.$slideTrack);
        _.reinit();
      }
    };
  SlickUABB.prototype.unload = function () {
    var _ = this;
    $('.slick-cloned', _.$slider).remove();
    if (_.$dots) {
      _.$dots.remove();
    }
    if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
      _.$prevArrow.remove();
    }
    if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
      _.$nextArrow.remove();
    }
    _.$slides
      .removeClass('slick-slide slick-active slick-visible slick-current')
      .attr('aria-hidden', 'true')
      .css('width', '');
  };
  SlickUABB.prototype.unslick = function (fromBreakpoint) {
    var _ = this;
    _.$slider.trigger('unslick', [_, fromBreakpoint]);
    _.destroy();
  };
  SlickUABB.prototype.updateArrows = function () {
    var _ = this,
      centerOffset;
    centerOffset = Math.floor(_.options.slidesToShow / 2);
    if (
      _.options.arrows === !0 &&
      _.slideCount > _.options.slidesToShow &&
      !_.options.infinite
    ) {
      _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      if (_.currentSlide === 0) {
        _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
        _.$nextArrow
          .removeClass('slick-disabled')
          .attr('aria-disabled', 'false');
      } else if (
        _.currentSlide >= _.slideCount - _.options.slidesToShow &&
        _.options.centerMode === !1
      ) {
        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
        _.$prevArrow
          .removeClass('slick-disabled')
          .attr('aria-disabled', 'false');
      } else if (
        _.currentSlide >= _.slideCount - 1 &&
        _.options.centerMode === !0
      ) {
        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
        _.$prevArrow
          .removeClass('slick-disabled')
          .attr('aria-disabled', 'false');
      }
    }
  };
  SlickUABB.prototype.updateDots = function () {
    var _ = this;
    if (_.$dots !== null) {
      _.$dots.find('li').removeClass('slick-active').end();
      _.$dots
        .find('li')
        .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
        .addClass('slick-active');
    }
  };
  SlickUABB.prototype.visibility = function () {
    var _ = this;
    if (_.options.autoplay) {
      if (document[_.hidden]) {
        _.interrupted = !0;
      } else {
        _.interrupted = !1;
      }
    }
  };
  $.fn.uabbslick = function () {
    var _ = this,
      opt = arguments[0],
      args = Array.prototype.slice.call(arguments, 1),
      l = _.length,
      i,
      ret;
    for (i = 0; i < l; i++) {
      if (typeof opt == 'object' || typeof opt == 'undefined')
        _[i].slick = new SlickUABB(_[i], opt);
      else ret = _[i].slick[opt].apply(_[i].slick, args);
      if (typeof ret != 'undefined') return ret;
    }
    return _;
  };
});

!(function (t) {
  'use strict';
  (t.fn.fitVids = function (e) {
    var i = {
      customSelector: null,
      ignore: null,
    };
    if (!document.getElementById('fit-vids-style')) {
      var r = document.head || document.getElementsByTagName('head')[0],
        a =
          '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}',
        d = document.createElement('div');
      (d.innerHTML = '<p>x</p><style id="fit-vids-style">' + a + '</style>'),
        r.appendChild(d.childNodes[1]);
    }
    return (
      e && t.extend(i, e),
      this.each(function () {
        var e = [
          'iframe[src*="player.vimeo.com"]',
          'iframe[src*="youtube.com"]',
          'iframe[src*="youtube-nocookie.com"]',
          'iframe[src*="kickstarter.com"][src*="video.html"]',
          'object',
          'embed',
        ];
        i.customSelector && e.push(i.customSelector);
        var r = '.fitvidsignore';
        i.ignore && (r = r + ', ' + i.ignore);
        var a = t(this).find(e.join(','));
        (a = a.not('object object')),
          (a = a.not(r)),
          a.each(function () {
            var e = t(this);
            if (
              !(
                e.parents(r).length > 0 ||
                ('embed' === this.tagName.toLowerCase() &&
                  e.parent('object').length) ||
                e.parent('.fluid-width-video-wrapper').length
              )
            ) {
              e.css('height') ||
                e.css('width') ||
                (!isNaN(e.attr('height')) && !isNaN(e.attr('width'))) ||
                (e.attr('height', 9), e.attr('width', 16));
              var i =
                  'object' === this.tagName.toLowerCase() ||
                  (e.attr('height') && !isNaN(parseInt(e.attr('height'), 10)))
                    ? parseInt(e.attr('height'), 10)
                    : e.height(),
                a = isNaN(parseInt(e.attr('width'), 10))
                  ? e.width()
                  : parseInt(e.attr('width'), 10),
                d = i / a;
              if (!e.attr('name')) {
                var o = 'fitvid' + t.fn.fitVids._count;
                e.attr('name', o), t.fn.fitVids._count++;
              }
              e
                .wrap('<div class="fluid-width-video-wrapper"></div>')
                .parent('.fluid-width-video-wrapper')
                .css('padding-top', 100 * d + '%'),
                e.removeAttr('height').removeAttr('width');
            }
          });
      })
    );
  }),
    (t.fn.fitVids._count = 0);
})(window.jQuery || window.Zepto);

!(function (e) {
  'function' == typeof define && define.amd
    ? define(['jquery'], e)
    : 'object' == typeof exports
    ? e(require('jquery'))
    : e(window.jQuery || window.Zepto);
})(function (c) {
  function e() {}
  function d(e, t) {
    f.ev.on(I + e + x, t);
  }
  function u(e, t, n, o) {
    var i = document.createElement('div');
    return (
      (i.className = 'mfp-' + e),
      n && (i.innerHTML = n),
      o ? t && t.appendChild(i) : ((i = c(i)), t && i.appendTo(t)),
      i
    );
  }
  function p(e, t) {
    f.ev.triggerHandler(I + e, t),
      f.st.callbacks &&
        ((e = e.charAt(0).toLowerCase() + e.slice(1)), f.st.callbacks[e]) &&
        f.st.callbacks[e].apply(f, Array.isArray(t) ? t : [t]);
  }
  function m(e) {
    return (
      (e === H && f.currTemplate.closeBtn) ||
        ((f.currTemplate.closeBtn = c(
          f.st.closeMarkup.replace('%title%', f.st.tClose)
        )),
        (H = e)),
      f.currTemplate.closeBtn
    );
  }
  function a() {
    c.magnificPopup.instance ||
      ((f = new e()).init(), (c.magnificPopup.instance = f));
  }
  function r() {
    y && (v.after(y.addClass(l)).detach(), (y = null));
  }
  function i() {
    n && c(document.body).removeClass(n);
  }
  function t() {
    i(), f.req && f.req.abort();
  }
  var f,
    o,
    g,
    s,
    h,
    H,
    l,
    v,
    y,
    n,
    C = 'Close',
    F = 'BeforeClose',
    w = 'MarkupParse',
    b = 'Open',
    j = 'Change',
    I = 'mfp',
    x = '.' + I,
    k = 'mfp-ready',
    N = 'mfp-removing',
    T = 'mfp-prevent-close',
    _ = !!window.jQuery,
    P = c(window),
    S =
      ((c.magnificPopup = {
        instance: null,
        proto: (e.prototype = {
          constructor: e,
          init: function () {
            var e = navigator.appVersion;
            (f.isLowIE = f.isIE8 = document.all && !document.addEventListener),
              (f.isAndroid = /android/gi.test(e)),
              (f.isIOS = /iphone|ipad|ipod/gi.test(e)),
              (f.supportsTransition = (function () {
                var e = document.createElement('p').style,
                  t = ['ms', 'O', 'Moz', 'Webkit'];
                if (void 0 !== e.transition) return !0;
                for (; t.length; ) if (t.pop() + 'Transition' in e) return !0;
                return !1;
              })()),
              (f.probablyMobile =
                f.isAndroid ||
                f.isIOS ||
                /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
                  navigator.userAgent
                )),
              (g = c(document)),
              (f.popupsCache = {});
          },
          open: function (e) {
            if (!1 === e.isObj) {
              (f.items = e.items.toArray()), (f.index = 0);
              for (var t, n = e.items, o = 0; o < n.length; o++)
                if ((t = (t = n[o]).parsed ? t.el[0] : t) === e.el[0]) {
                  f.index = o;
                  break;
                }
            } else
              (f.items = Array.isArray(e.items) ? e.items : [e.items]),
                (f.index = e.index || 0);
            if (!f.isOpen) {
              (f.types = []),
                (h = ''),
                e.mainEl && e.mainEl.length
                  ? (f.ev = e.mainEl.eq(0))
                  : (f.ev = g),
                e.key
                  ? (f.popupsCache[e.key] || (f.popupsCache[e.key] = {}),
                    (f.currTemplate = f.popupsCache[e.key]))
                  : (f.currTemplate = {}),
                (f.st = c.extend(!0, {}, c.magnificPopup.defaults, e)),
                (f.fixedContentPos =
                  'auto' === f.st.fixedContentPos
                    ? !f.probablyMobile
                    : f.st.fixedContentPos),
                f.st.modal &&
                  ((f.st.closeOnContentClick = !1),
                  (f.st.closeOnBgClick = !1),
                  (f.st.showCloseBtn = !1),
                  (f.st.enableEscapeKey = !1)),
                f.bgOverlay ||
                  ((f.bgOverlay = u('bg').on('click' + x, function () {
                    f.close();
                  })),
                  (f.wrap = u('wrap')
                    .attr('tabindex', -1)
                    .on('click' + x, function (e) {
                      f._checkIfClose(e.target) && f.close();
                    })),
                  (f.container = u('container', f.wrap))),
                (f.contentContainer = u('content')),
                f.st.preloader &&
                  (f.preloader = u('preloader', f.container, f.st.tLoading));
              var i = c.magnificPopup.modules;
              for (o = 0; o < i.length; o++) {
                var a = (a = i[o]).charAt(0).toUpperCase() + a.slice(1);
                f['init' + a].call(f);
              }
              p('BeforeOpen'),
                f.st.showCloseBtn &&
                  (f.st.closeBtnInside
                    ? (d(w, function (e, t, n, o) {
                        n.close_replaceWith = m(o.type);
                      }),
                      (h += ' mfp-close-btn-in'))
                    : f.wrap.append(m())),
                f.st.alignTop && (h += ' mfp-align-top'),
                f.fixedContentPos
                  ? f.wrap.css({
                      overflow: f.st.overflowY,
                      overflowX: 'hidden',
                      overflowY: f.st.overflowY,
                    })
                  : f.wrap.css({
                      top: P.scrollTop(),
                      position: 'absolute',
                    }),
                (!1 !== f.st.fixedBgPos &&
                  ('auto' !== f.st.fixedBgPos || f.fixedContentPos)) ||
                  f.bgOverlay.css({
                    height: g.height(),
                    position: 'absolute',
                  }),
                f.st.enableEscapeKey &&
                  g.on('keyup' + x, function (e) {
                    27 === e.keyCode && f.close();
                  }),
                P.on('resize' + x, function () {
                  f.updateSize();
                }),
                f.st.closeOnContentClick || (h += ' mfp-auto-cursor'),
                h && f.wrap.addClass(h);
              var r = (f.wH = P.height()),
                s = {},
                l =
                  (f.fixedContentPos &&
                    f._hasScrollBar(r) &&
                    (l = f._getScrollbarSize()) &&
                    (s.marginRight = l),
                  f.fixedContentPos &&
                    (f.isIE7
                      ? c('body, html').css('overflow', 'hidden')
                      : (s.overflow = 'hidden')),
                  f.st.mainClass);
              return (
                f.isIE7 && (l += ' mfp-ie7'),
                l && f._addClassToMFP(l),
                f.updateItemHTML(),
                p('BuildControls'),
                c('html').css(s),
                f.bgOverlay
                  .add(f.wrap)
                  .prependTo(f.st.prependTo || c(document.body)),
                (f._lastFocusedEl = document.activeElement),
                setTimeout(function () {
                  f.content
                    ? (f._addClassToMFP(k), f._setFocus())
                    : f.bgOverlay.addClass(k),
                    g.on('focusin' + x, f._onFocusIn);
                }, 16),
                (f.isOpen = !0),
                f.updateSize(r),
                p(b),
                e
              );
            }
            f.updateItemHTML();
          },
          close: function () {
            f.isOpen &&
              (p(F),
              (f.isOpen = !1),
              f.st.removalDelay && !f.isLowIE && f.supportsTransition
                ? (f._addClassToMFP(N),
                  setTimeout(function () {
                    f._close();
                  }, f.st.removalDelay))
                : f._close());
          },
          _close: function () {
            p(C);
            var e = N + ' ' + k + ' ';
            f.bgOverlay.detach(),
              f.wrap.detach(),
              f.container.empty(),
              f.st.mainClass && (e += f.st.mainClass + ' '),
              f._removeClassFromMFP(e),
              f.fixedContentPos &&
                ((e = {
                  marginRight: '',
                }),
                f.isIE7
                  ? c('body, html').css('overflow', '')
                  : (e.overflow = ''),
                c('html').css(e)),
              g.off('keyup.mfp focusin' + x),
              f.ev.off(x),
              f.wrap.attr('class', 'mfp-wrap').removeAttr('style'),
              f.bgOverlay.attr('class', 'mfp-bg'),
              f.container.attr('class', 'mfp-container'),
              !f.st.showCloseBtn ||
                (f.st.closeBtnInside &&
                  !0 !== f.currTemplate[f.currItem.type]) ||
                (f.currTemplate.closeBtn && f.currTemplate.closeBtn.detach()),
              f.st.autoFocusLast &&
                f._lastFocusedEl &&
                c(f._lastFocusedEl).focus(),
              (f.currItem = null),
              (f.content = null),
              (f.currTemplate = null),
              (f.prevHeight = 0),
              p('AfterClose');
          },
          updateSize: function (e) {
            var t;
            f.isIOS
              ? ((t = document.documentElement.clientWidth / window.innerWidth),
                (t = window.innerHeight * t),
                f.wrap.css('height', t),
                (f.wH = t))
              : (f.wH = e || P.height()),
              f.fixedContentPos || f.wrap.css('height', f.wH),
              p('Resize');
          },
          updateItemHTML: function () {
            var e = f.items[f.index],
              t =
                (f.contentContainer.detach(),
                f.content && f.content.detach(),
                (e = e.parsed ? e : f.parseEl(f.index)).type),
              n =
                (p('BeforeChange', [f.currItem ? f.currItem.type : '', t]),
                (f.currItem = e),
                f.currTemplate[t] ||
                  ((n = !!f.st[t] && f.st[t].markup),
                  p('FirstMarkupParse', n),
                  (f.currTemplate[t] = !n || c(n))),
                s &&
                  s !== e.type &&
                  f.container.removeClass('mfp-' + s + '-holder'),
                f['get' + t.charAt(0).toUpperCase() + t.slice(1)](
                  e,
                  f.currTemplate[t]
                ));
            f.appendContent(n, t),
              (e.preloaded = !0),
              p(j, e),
              (s = e.type),
              f.container.prepend(f.contentContainer),
              p('AfterChange');
          },
          appendContent: function (e, t) {
            (f.content = e)
              ? f.st.showCloseBtn &&
                f.st.closeBtnInside &&
                !0 === f.currTemplate[t]
                ? f.content.find('.mfp-close').length || f.content.append(m())
                : (f.content = e)
              : (f.content = ''),
              p('BeforeAppend'),
              f.container.addClass('mfp-' + t + '-holder'),
              f.contentContainer.append(f.content);
          },
          parseEl: function (e) {
            var t,
              n = f.items[e];
            if (
              (n = n.tagName
                ? {
                    el: c(n),
                  }
                : ((t = n.type),
                  {
                    data: n,
                    src: n.src,
                  })).el
            ) {
              for (var o = f.types, i = 0; i < o.length; i++)
                if (n.el.hasClass('mfp-' + o[i])) {
                  t = o[i];
                  break;
                }
              (n.src = n.el.attr('data-mfp-src')),
                n.src || (n.src = n.el.attr('href'));
            }
            return (
              (n.type = t || f.st.type || 'inline'),
              (n.index = e),
              (n.parsed = !0),
              (f.items[e] = n),
              p('ElementParse', n),
              f.items[e]
            );
          },
          addGroup: function (t, n) {
            function e(e) {
              (e.mfpEl = this), f._openClick(e, t, n);
            }
            var o = 'click.magnificPopup';
            ((n = n || {}).mainEl = t),
              n.items
                ? ((n.isObj = !0), t.off(o).on(o, e))
                : ((n.isObj = !1),
                  n.delegate
                    ? t.off(o).on(o, n.delegate, e)
                    : (n.items = t).off(o).on(o, e));
          },
          _openClick: function (e, t, n) {
            var o = (void 0 !== n.midClick ? n : c.magnificPopup.defaults)
              .midClick;
            if (
              o ||
              !(
                2 === e.which ||
                e.ctrlKey ||
                e.metaKey ||
                e.altKey ||
                e.shiftKey
              )
            ) {
              o = (void 0 !== n.disableOn ? n : c.magnificPopup.defaults)
                .disableOn;
              if (o)
                if ('function' == typeof o) {
                  if (!o.call(f)) return !0;
                } else if (P.width() < o) return !0;
              e.type && (e.preventDefault(), f.isOpen) && e.stopPropagation(),
                (n.el = c(e.mfpEl)),
                n.delegate && (n.items = t.find(n.delegate)),
                f.open(n);
            }
          },
          updateStatus: function (e, t) {
            var n;
            f.preloader &&
              (o !== e && f.container.removeClass('mfp-s-' + o),
              (n = {
                status: e,
                text: (t = t || 'loading' !== e ? t : f.st.tLoading),
              }),
              p('UpdateStatus', n),
              (e = n.status),
              f.preloader.html((t = n.text)),
              f.preloader.find('a').on('click', function (e) {
                e.stopImmediatePropagation();
              }),
              f.container.addClass('mfp-s-' + e),
              (o = e));
          },
          _checkIfClose: function (e) {
            if (!c(e).closest('.' + T).length) {
              var t = f.st.closeOnContentClick,
                n = f.st.closeOnBgClick;
              if (t && n) return !0;
              if (
                !f.content ||
                c(e).closest('.mfp-close').length ||
                (f.preloader && e === f.preloader[0])
              )
                return !0;
              if (e === f.content[0] || c.contains(f.content[0], e)) {
                if (t) return !0;
              } else if (n && c.contains(document, e)) return !0;
              return !1;
            }
          },
          _addClassToMFP: function (e) {
            f.bgOverlay.addClass(e), f.wrap.addClass(e);
          },
          _removeClassFromMFP: function (e) {
            this.bgOverlay.removeClass(e), f.wrap.removeClass(e);
          },
          _hasScrollBar: function (e) {
            return (
              (f.isIE7 ? g.height() : document.body.scrollHeight) >
              (e || P.height())
            );
          },
          _setFocus: function () {
            (f.st.focus ? f.content.find(f.st.focus).eq(0) : f.wrap).focus();
          },
          _onFocusIn: function (e) {
            if (e.target !== f.wrap[0] && !c.contains(f.wrap[0], e.target))
              return f._setFocus(), !1;
          },
          _parseMarkup: function (i, e, t) {
            var a;
            t.data && (e = c.extend(t.data, e)),
              p(w, [i, e, t]),
              c.each(e, function (e, t) {
                if (void 0 === t || !1 === t) return !0;
                var n, o;
                1 < (a = e.split('_')).length
                  ? 0 < (n = i.find(x + '-' + a[0])).length &&
                    ('replaceWith' === (o = a[1])
                      ? n[0] !== t[0] && n.replaceWith(t)
                      : 'img' === o
                      ? n.is('img')
                        ? n.attr('src', t)
                        : n.replaceWith(
                            c('<img>')
                              .attr('src', t)
                              .attr('class', n.attr('class'))
                          )
                      : n.attr(a[1], t))
                  : i.find(x + '-' + e).html(t);
              });
          },
          _getScrollbarSize: function () {
            var e;
            return (
              void 0 === f.scrollbarSize &&
                (((e = document.createElement('div')).style.cssText =
                  'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;'),
                document.body.appendChild(e),
                (f.scrollbarSize = e.offsetWidth - e.clientWidth),
                document.body.removeChild(e)),
              f.scrollbarSize
            );
          },
        }),
        modules: [],
        open: function (e, t) {
          return (
            a(),
            ((e = e ? c.extend(!0, {}, e) : {}).isObj = !0),
            (e.index = t || 0),
            this.instance.open(e)
          );
        },
        close: function () {
          return c.magnificPopup.instance && c.magnificPopup.instance.close();
        },
        registerModule: function (e, t) {
          t.options && (c.magnificPopup.defaults[e] = t.options),
            c.extend(this.proto, t.proto),
            this.modules.push(e);
        },
        defaults: {
          disableOn: 0,
          key: null,
          midClick: !1,
          mainClass: '',
          preloader: !0,
          focus: '',
          closeOnContentClick: !1,
          closeOnBgClick: !0,
          closeBtnInside: !0,
          showCloseBtn: !0,
          enableEscapeKey: !0,
          modal: !1,
          alignTop: !1,
          removalDelay: 0,
          prependTo: null,
          fixedContentPos: 'auto',
          fixedBgPos: 'auto',
          overflowY: 'auto',
          closeMarkup:
            '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
          tClose: 'Close (Esc)',
          tLoading: 'Loading...',
          autoFocusLast: !0,
        },
      }),
      (c.fn.magnificPopup = function (e) {
        a();
        var t,
          n,
          o,
          i = c(this);
        return (
          'string' == typeof e
            ? 'open' === e
              ? ((t = _ ? i.data('magnificPopup') : i[0].magnificPopup),
                (n = parseInt(arguments[1], 10) || 0),
                (o = t.items
                  ? t.items[n]
                  : ((o = i), (o = t.delegate ? o.find(t.delegate) : o).eq(n))),
                f._openClick(
                  {
                    mfpEl: o,
                  },
                  i,
                  t
                ))
              : f.isOpen &&
                f[e].apply(f, Array.prototype.slice.call(arguments, 1))
            : ((e = c.extend(!0, {}, e)),
              _ ? i.data('magnificPopup', e) : (i[0].magnificPopup = e),
              f.addGroup(i, e)),
          i
        );
      }),
      'inline'),
    E =
      (c.magnificPopup.registerModule(S, {
        options: {
          hiddenClass: 'hide',
          markup: '',
          tNotFound: 'Content not found',
        },
        proto: {
          initInline: function () {
            f.types.push(S),
              d(C + '.' + S, function () {
                r();
              });
          },
          getInline: function (e, t) {
            var n, o, i;
            return (
              r(),
              e.src
                ? ((n = f.st.inline),
                  (o = c(e.src)).length
                    ? ((i = o[0].parentNode) &&
                        i.tagName &&
                        (v ||
                          ((l = n.hiddenClass), (v = u(l)), (l = 'mfp-' + l)),
                        (y = o.after(v).detach().removeClass(l))),
                      f.updateStatus('ready'))
                    : (f.updateStatus('error', n.tNotFound), (o = c('<div>'))),
                  (e.inlineElement = o))
                : (f.updateStatus('ready'), f._parseMarkup(t, {}, e), t)
            );
          },
        },
      }),
      'ajax');
  c.magnificPopup.registerModule(E, {
    options: {
      settings: null,
      cursor: 'mfp-ajax-cur',
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        f.types.push(E),
          (n = f.st.ajax.cursor),
          d(C + '.' + E, t),
          d('BeforeChange.' + E, t);
      },
      getAjax: function (o) {
        n && c(document.body).addClass(n), f.updateStatus('loading');
        var e = c.extend(
          {
            url: o.src,
            success: function (e, t, n) {
              e = {
                data: e,
                xhr: n,
              };
              p('ParseAjax', e),
                f.appendContent(c(e.data), E),
                (o.finished = !0),
                i(),
                f._setFocus(),
                setTimeout(function () {
                  f.wrap.addClass(k);
                }, 16),
                f.updateStatus('ready'),
                p('AjaxContentAdded');
            },
            error: function () {
              i(),
                (o.finished = o.loadError = !0),
                f.updateStatus(
                  'error',
                  f.st.ajax.tError.replace('%url%', o.src)
                );
            },
          },
          f.st.ajax.settings
        );
        return (f.req = c.ajax(e)), '';
      },
    },
  });
  var z;
  c.magnificPopup.registerModule('image', {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: 'mfp-zoom-out-cur',
      titleSrc: 'title',
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var e = f.st.image,
          t = '.image';
        f.types.push('image'),
          d(b + t, function () {
            'image' === f.currItem.type &&
              e.cursor &&
              c(document.body).addClass(e.cursor);
          }),
          d(C + t, function () {
            e.cursor && c(document.body).removeClass(e.cursor),
              P.off('resize' + x);
          }),
          d('Resize' + t, f.resizeImage),
          f.isLowIE && d('AfterChange', f.resizeImage);
      },
      resizeImage: function () {
        var e,
          t = f.currItem;
        t &&
          t.img &&
          f.st.image.verticalFit &&
          ((e = 0),
          f.isLowIE &&
            (e =
              parseInt(t.img.css('padding-top'), 10) +
              parseInt(t.img.css('padding-bottom'), 10)),
          t.img.css('max-height', f.wH - e));
      },
      _onImageHasSize: function (e) {
        e.img &&
          ((e.hasSize = !0),
          z && clearInterval(z),
          (e.isCheckingImgSize = !1),
          p('ImageHasSize', e),
          e.imgHidden) &&
          (f.content && f.content.removeClass('mfp-loading'),
          (e.imgHidden = !1));
      },
      findImageSize: function (t) {
        function n(e) {
          z && clearInterval(z),
            (z = setInterval(function () {
              0 < i.naturalWidth
                ? f._onImageHasSize(t)
                : (200 < o && clearInterval(z),
                  3 === ++o ? n(10) : 40 === o ? n(50) : 100 === o && n(500));
            }, e));
        }
        var o = 0,
          i = t.img[0];
        n(1);
      },
      getImage: function (e, t) {
        function n() {
          e &&
            (e.img[0].complete
              ? (e.img.off('.mfploader'),
                e === f.currItem &&
                  (f._onImageHasSize(e), f.updateStatus('ready')),
                (e.hasSize = !0),
                (e.loaded = !0),
                p('ImageLoadComplete'))
              : ++a < 200
              ? setTimeout(n, 100)
              : o());
        }
        function o() {
          e &&
            (e.img.off('.mfploader'),
            e === f.currItem &&
              (f._onImageHasSize(e),
              f.updateStatus('error', r.tError.replace('%url%', e.src))),
            (e.hasSize = !0),
            (e.loaded = !0),
            (e.loadError = !0));
        }
        var i,
          a = 0,
          r = f.st.image,
          s = t.find('.mfp-img');
        return (
          s.length &&
            (((i = document.createElement('img')).className = 'mfp-img'),
            e.el &&
              e.el.find('img').length &&
              (i.alt = e.el.find('img').attr('alt')),
            (e.img = c(i).on('load.mfploader', n).on('error.mfploader', o)),
            (i.src = e.src),
            s.is('img') && (e.img = e.img.clone()),
            0 < (i = e.img[0]).naturalWidth
              ? (e.hasSize = !0)
              : i.width || (e.hasSize = !1)),
          f._parseMarkup(
            t,
            {
              title: (function (e) {
                if (e.data && void 0 !== e.data.title) return e.data.title;
                var t = f.st.image.titleSrc;
                if (t) {
                  if ('function' == typeof t) return t.call(f, e);
                  if (e.el) return e.el.attr(t) || '';
                }
                return '';
              })(e),
              img_replaceWith: e.img,
            },
            e
          ),
          f.resizeImage(),
          e.hasSize
            ? (z && clearInterval(z),
              e.loadError
                ? (t.addClass('mfp-loading'),
                  f.updateStatus('error', r.tError.replace('%url%', e.src)))
                : (t.removeClass('mfp-loading'), f.updateStatus('ready')))
            : (f.updateStatus('loading'),
              (e.loading = !0),
              e.hasSize ||
                ((e.imgHidden = !0),
                t.addClass('mfp-loading'),
                f.findImageSize(e))),
          t
        );
      },
    },
  });
  function O(e) {
    var t;
    f.currTemplate[A] &&
      (t = f.currTemplate[A].find('iframe')).length &&
      (e || (t[0].src = '//about:blank'), f.isIE8) &&
      t.css('display', e ? 'block' : 'none');
  }
  function M(e) {
    var t = f.items.length;
    return t - 1 < e ? e - t : e < 0 ? t + e : e;
  }
  function W(e, t, n) {
    return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n);
  }
  c.magnificPopup.registerModule('zoom', {
    options: {
      enabled: !1,
      easing: 'ease-in-out',
      duration: 300,
      opener: function (e) {
        return e.is('img') ? e : e.find('img');
      },
    },
    proto: {
      initZoom: function () {
        var e,
          t,
          n,
          o,
          i,
          a,
          r = f.st.zoom,
          s = '.zoom';
        r.enabled &&
          f.supportsTransition &&
          ((t = r.duration),
          (n = function (e) {
            var e = e
                .clone()
                .removeAttr('style')
                .removeAttr('class')
                .addClass('mfp-animated-image'),
              t = 'all ' + r.duration / 1e3 + 's ' + r.easing,
              n = {
                position: 'fixed',
                zIndex: 9999,
                left: 0,
                top: 0,
                '-webkit-backface-visibility': 'hidden',
              },
              o = 'transition';
            return (
              (n['-webkit-' + o] = n['-moz-' + o] = n['-o-' + o] = n[o] = t),
              e.css(n),
              e
            );
          }),
          (o = function () {
            f.content.css('visibility', 'visible');
          }),
          d('BuildControls' + s, function () {
            f._allowZoom() &&
              (clearTimeout(i),
              f.content.css('visibility', 'hidden'),
              (e = f._getItemToZoom())
                ? ((a = n(e)).css(f._getOffset()),
                  f.wrap.append(a),
                  (i = setTimeout(function () {
                    a.css(f._getOffset(!0)),
                      (i = setTimeout(function () {
                        o(),
                          setTimeout(function () {
                            a.remove(), (e = a = null), p('ZoomAnimationEnded');
                          }, 16);
                      }, t));
                  }, 16)))
                : o());
          }),
          d(F + s, function () {
            if (f._allowZoom()) {
              if ((clearTimeout(i), (f.st.removalDelay = t), !e)) {
                if (!(e = f._getItemToZoom())) return;
                a = n(e);
              }
              a.css(f._getOffset(!0)),
                f.wrap.append(a),
                f.content.css('visibility', 'hidden'),
                setTimeout(function () {
                  a.css(f._getOffset());
                }, 16);
            }
          }),
          d(C + s, function () {
            f._allowZoom() && (o(), a && a.remove(), (e = null));
          }));
      },
      _allowZoom: function () {
        return 'image' === f.currItem.type;
      },
      _getItemToZoom: function () {
        return !!f.currItem.hasSize && f.currItem.img;
      },
      _getOffset: function (e) {
        var e = e
            ? f.currItem.img
            : f.st.zoom.opener(f.currItem.el || f.currItem),
          t = e.offset(),
          n = parseInt(e.css('padding-top'), 10),
          o = parseInt(e.css('padding-bottom'), 10),
          e =
            ((t.top -= c(window).scrollTop() - n),
            {
              width: e.width(),
              height: (_ ? e.innerHeight() : e[0].offsetHeight) - o - n,
            });
        return (
          (B =
            void 0 === B
              ? void 0 !== document.createElement('p').style.MozTransform
              : B)
            ? (e['-moz-transform'] = e.transform =
                'translate(' + t.left + 'px,' + t.top + 'px)')
            : ((e.left = t.left), (e.top = t.top)),
          e
        );
      },
    },
  });
  var B,
    A = 'iframe',
    L =
      (c.magnificPopup.registerModule(A, {
        options: {
          markup:
            '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" allowfullscreen></iframe></div>',
          srcAction: 'iframe_src',
          patterns: {
            youtube: {
              index: 'youtube.com/',
              id: 'v=',
              src: '//www.youtube.com/embed/%id%?autoplay=1',
            },
            youtu_be: {
              index: 'youtu.be',
              id: '/',
              src: '//www.youtube.com/embed/%id%?autoplay=1',
            },
            youtube_nocookie: {
              index: 'youtube-nocookie.com',
              id: '/',
              src: '//www.youtube-nocookie.com/embed/%id%?autoplay=1',
            },
            vimeo: {
              index: 'vimeo.com/',
              id: '/',
              src: '//player.vimeo.com/video/%id%?autoplay=1',
            },
            gmaps: {
              index: '//maps.google.',
              src: '%id%&output=embed',
            },
          },
        },
        proto: {
          initIframe: function () {
            f.types.push(A),
              d('BeforeChange', function (e, t, n) {
                t !== n && (t === A ? O() : n === A && O(!0));
              }),
              d(C + '.' + A, function () {
                O();
              });
          },
          getIframe: function (e, t) {
            var n = e.src,
              o = f.st.iframe,
              i =
                (c.each(o.patterns, function () {
                  if (-1 < n.indexOf(this.index))
                    return (
                      this.id &&
                        (n =
                          'string' == typeof this.id
                            ? n.substr(
                                n.lastIndexOf(this.id) + this.id.length,
                                n.length
                              )
                            : this.id.call(this, n)),
                      (n = this.src.replace('%id%', n)),
                      !1
                    );
                }),
                {});
            return (
              o.srcAction && (i[o.srcAction] = n),
              f._parseMarkup(t, i, e),
              f.updateStatus('ready'),
              t
            );
          },
        },
      }),
      c.magnificPopup.registerModule('gallery', {
        options: {
          enabled: !1,
          arrowMarkup:
            '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
          preload: [0, 2],
          navigateByImgClick: !0,
          arrows: !0,
          tPrev: 'Previous (Left arrow key)',
          tNext: 'Next (Right arrow key)',
          tCounter: '%curr% of %total%',
        },
        proto: {
          initGallery: function () {
            var a = f.st.gallery,
              e = '.mfp-gallery';
            if (((f.direction = !0), !a || !a.enabled)) return !1;
            (h += ' mfp-gallery'),
              d(b + e, function () {
                a.navigateByImgClick &&
                  f.wrap.on('click' + e, '.mfp-img', function () {
                    if (1 < f.items.length) return f.next(), !1;
                  }),
                  g.on('keydown' + e, function (e) {
                    37 === e.keyCode ? f.prev() : 39 === e.keyCode && f.next();
                  });
              }),
              d('UpdateStatus' + e, function (e, t) {
                t.text &&
                  (t.text = W(t.text, f.currItem.index, f.items.length));
              }),
              d(w + e, function (e, t, n, o) {
                var i = f.items.length;
                n.counter = 1 < i ? W(a.tCounter, o.index, i) : '';
              }),
              d('BuildControls' + e, function () {
                var e, t;
                1 < f.items.length &&
                  a.arrows &&
                  !f.arrowLeft &&
                  ((t = a.arrowMarkup),
                  (e = f.arrowLeft =
                    c(
                      t.replace(/%title%/gi, a.tPrev).replace(/%dir%/gi, 'left')
                    ).addClass(T)),
                  (t = f.arrowRight =
                    c(
                      t
                        .replace(/%title%/gi, a.tNext)
                        .replace(/%dir%/gi, 'right')
                    ).addClass(T)),
                  e.click(function () {
                    f.prev();
                  }),
                  t.click(function () {
                    f.next();
                  }),
                  f.container.append(e.add(t)));
              }),
              d(j + e, function () {
                f._preloadTimeout && clearTimeout(f._preloadTimeout),
                  (f._preloadTimeout = setTimeout(function () {
                    f.preloadNearbyImages(), (f._preloadTimeout = null);
                  }, 16));
              }),
              d(C + e, function () {
                g.off(e),
                  f.wrap.off('click' + e),
                  (f.arrowRight = f.arrowLeft = null);
              });
          },
          next: function () {
            (f.direction = !0), (f.index = M(f.index + 1)), f.updateItemHTML();
          },
          prev: function () {
            (f.direction = !1), (f.index = M(f.index - 1)), f.updateItemHTML();
          },
          goTo: function (e) {
            (f.direction = e >= f.index), (f.index = e), f.updateItemHTML();
          },
          preloadNearbyImages: function () {
            for (
              var e = f.st.gallery.preload,
                t = Math.min(e[0], f.items.length),
                n = Math.min(e[1], f.items.length),
                o = 1;
              o <= (f.direction ? n : t);
              o++
            )
              f._preloadItem(f.index + o);
            for (o = 1; o <= (f.direction ? t : n); o++)
              f._preloadItem(f.index - o);
          },
          _preloadItem: function (e) {
            var t;
            (e = M(e)),
              f.items[e].preloaded ||
                ((t = f.items[e]).parsed || (t = f.parseEl(e)),
                p('LazyLoad', t),
                'image' === t.type &&
                  (t.img = c('<img class="mfp-img" />')
                    .on('load.mfploader', function () {
                      t.hasSize = !0;
                    })
                    .on('error.mfploader', function () {
                      (t.hasSize = !0),
                        (t.loadError = !0),
                        p('LazyLoadError', t);
                    })
                    .attr('src', t.src)),
                (t.preloaded = !0));
          },
        },
      }),
      'retina');
  c.magnificPopup.registerModule(L, {
    options: {
      replaceSrc: function (e) {
        return e.src.replace(/\.\w+$/, function (e) {
          return '@2x' + e;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        var n, o;
        1 < window.devicePixelRatio &&
          ((n = f.st.retina), (o = n.ratio), 1 < (o = isNaN(o) ? o() : o)) &&
          (d('ImageHasSize.' + L, function (e, t) {
            t.img.css({
              'max-width': t.img[0].naturalWidth / o,
              width: '100%',
            });
          }),
          d('ElementParse.' + L, function (e, t) {
            t.src = n.replaceSrc(t, o);
          }));
      },
    },
  }),
    a();
});
/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
!(function () {
  'use strict';
  function t(o) {
    if (!o) throw new Error('No options passed to Waypoint constructor');
    if (!o.element)
      throw new Error('No element option passed to Waypoint constructor');
    if (!o.handler)
      throw new Error('No handler option passed to Waypoint constructor');
    (this.key = 'waypoint-' + e),
      (this.options = t.Adapter.extend({}, t.defaults, o)),
      (this.element = this.options.element),
      (this.adapter = new t.Adapter(this.element)),
      (this.callback = o.handler),
      (this.axis = this.options.horizontal ? 'horizontal' : 'vertical'),
      (this.enabled = this.options.enabled),
      (this.triggerPoint = null),
      (this.group = t.Group.findOrCreate({
        name: this.options.group,
        axis: this.axis,
      })),
      (this.context = t.Context.findOrCreateByElement(this.options.context)),
      t.offsetAliases[this.options.offset] &&
        (this.options.offset = t.offsetAliases[this.options.offset]),
      this.group.add(this),
      this.context.add(this),
      (i[this.key] = this),
      (e += 1);
  }
  var e = 0,
    i = {};
  (t.prototype.queueTrigger = function (t) {
    this.group.queueTrigger(this, t);
  }),
    (t.prototype.trigger = function (t) {
      this.enabled && this.callback && this.callback.apply(this, t);
    }),
    (t.prototype.destroy = function () {
      this.context.remove(this), this.group.remove(this), delete i[this.key];
    }),
    (t.prototype.disable = function () {
      return (this.enabled = !1), this;
    }),
    (t.prototype.enable = function () {
      return this.context.refresh(), (this.enabled = !0), this;
    }),
    (t.prototype.next = function () {
      return this.group.next(this);
    }),
    (t.prototype.previous = function () {
      return this.group.previous(this);
    }),
    (t.invokeAll = function (t) {
      var e = [];
      for (var o in i) e.push(i[o]);
      for (var n = 0, r = e.length; r > n; n++) e[n][t]();
    }),
    (t.destroyAll = function () {
      t.invokeAll('destroy');
    }),
    (t.disableAll = function () {
      t.invokeAll('disable');
    }),
    (t.enableAll = function () {
      t.invokeAll('enable');
    }),
    (t.refreshAll = function () {
      t.Context.refreshAll();
    }),
    (t.viewportHeight = function () {
      return window.innerHeight || document.documentElement.clientHeight;
    }),
    (t.viewportWidth = function () {
      return document.documentElement.clientWidth;
    }),
    (t.adapters = []),
    (t.defaults = {
      context: window,
      continuous: !0,
      enabled: !0,
      group: 'default',
      horizontal: !1,
      offset: 0,
    }),
    (t.offsetAliases = {
      'bottom-in-view': function () {
        return this.context.innerHeight() - this.adapter.outerHeight();
      },
      'right-in-view': function () {
        return this.context.innerWidth() - this.adapter.outerWidth();
      },
    }),
    (window.Waypoint = t);
})(),
  (function () {
    'use strict';
    function t(t) {
      window.setTimeout(t, 1e3 / 60);
    }
    function e(t) {
      (this.element = t),
        (this.Adapter = n.Adapter),
        (this.adapter = new this.Adapter(t)),
        (this.key = 'waypoint-context-' + i),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop(),
        }),
        (this.waypoints = {
          vertical: {},
          horizontal: {},
        }),
        (t.waypointContextKey = this.key),
        (o[t.waypointContextKey] = this),
        (i += 1),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler();
    }
    var i = 0,
      o = {},
      n = window.Waypoint,
      r = window.onload;
    (e.prototype.add = function (t) {
      var e = t.options.horizontal ? 'horizontal' : 'vertical';
      (this.waypoints[e][t.key] = t), this.refresh();
    }),
      (e.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          e = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && e && (this.adapter.off('.waypoints'), delete o[this.key]);
      }),
      (e.prototype.createThrottledResizeHandler = function () {
        function t() {
          e.handleResize(), (e.didResize = !1);
        }
        var e = this;
        this.adapter.on('resize.waypoints', function () {
          e.didResize || ((e.didResize = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.createThrottledScrollHandler = function () {
        function t() {
          e.handleScroll(), (e.didScroll = !1);
        }
        var e = this;
        this.adapter.on('scroll.waypoints', function () {
          (!e.didScroll || n.isTouch) &&
            ((e.didScroll = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.handleResize = function () {
        n.Context.refreshAll();
      }),
      (e.prototype.handleScroll = function () {
        var t = {},
          e = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: 'right',
              backward: 'left',
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: 'down',
              backward: 'up',
            },
          };
        for (var i in e) {
          var o = e[i],
            n = o.newScroll > o.oldScroll,
            r = n ? o.forward : o.backward;
          for (var s in this.waypoints[i]) {
            var a = this.waypoints[i][s],
              l = o.oldScroll < a.triggerPoint,
              h = o.newScroll >= a.triggerPoint,
              p = l && h,
              u = !l && !h;
            (p || u) && (a.queueTrigger(r), (t[a.group.id] = a.group));
          }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = {
          x: e.horizontal.newScroll,
          y: e.vertical.newScroll,
        };
      }),
      (e.prototype.innerHeight = function () {
        return this.element == this.element.window
          ? n.viewportHeight()
          : this.adapter.innerHeight();
      }),
      (e.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty();
      }),
      (e.prototype.innerWidth = function () {
        return this.element == this.element.window
          ? n.viewportWidth()
          : this.adapter.innerWidth();
      }),
      (e.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints)
          for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy();
      }),
      (e.prototype.refresh = function () {
        var t,
          e = this.element == this.element.window,
          i = e ? void 0 : this.adapter.offset(),
          o = {};
        this.handleScroll(),
          (t = {
            horizontal: {
              contextOffset: e ? 0 : i.left,
              contextScroll: e ? 0 : this.oldScroll.x,
              contextDimension: this.innerWidth(),
              oldScroll: this.oldScroll.x,
              forward: 'right',
              backward: 'left',
              offsetProp: 'left',
            },
            vertical: {
              contextOffset: e ? 0 : i.top,
              contextScroll: e ? 0 : this.oldScroll.y,
              contextDimension: this.innerHeight(),
              oldScroll: this.oldScroll.y,
              forward: 'down',
              backward: 'up',
              offsetProp: 'top',
            },
          });
        for (var r in t) {
          var s = t[r];
          for (var a in this.waypoints[r]) {
            var l,
              h,
              p,
              u,
              c,
              d = this.waypoints[r][a],
              f = d.options.offset,
              w = d.triggerPoint,
              y = 0,
              g = null == w;
            d.element !== d.element.window &&
              (y = d.adapter.offset()[s.offsetProp]),
              'function' == typeof f
                ? (f = f.apply(d))
                : 'string' == typeof f &&
                  ((f = parseFloat(f)),
                  d.options.offset.indexOf('%') > -1 &&
                    (f = Math.ceil((s.contextDimension * f) / 100))),
              (l = s.contextScroll - s.contextOffset),
              (d.triggerPoint = y + l - f),
              (h = w < s.oldScroll),
              (p = d.triggerPoint >= s.oldScroll),
              (u = h && p),
              (c = !h && !p),
              !g && u
                ? (d.queueTrigger(s.backward), (o[d.group.id] = d.group))
                : !g && c
                ? (d.queueTrigger(s.forward), (o[d.group.id] = d.group))
                : g &&
                  s.oldScroll >= d.triggerPoint &&
                  (d.queueTrigger(s.forward), (o[d.group.id] = d.group));
          }
        }
        return (
          n.requestAnimationFrame(function () {
            for (var t in o) o[t].flushTriggers();
          }),
          this
        );
      }),
      (e.findOrCreateByElement = function (t) {
        return e.findByElement(t) || new e(t);
      }),
      (e.refreshAll = function () {
        for (var t in o) o[t].refresh();
      }),
      (e.findByElement = function (t) {
        return o[t.waypointContextKey];
      }),
      (window.onload = function () {
        r && r(), e.refreshAll();
      }),
      (n.requestAnimationFrame = function (e) {
        var i =
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          t;
        i.call(window, e);
      }),
      (n.Context = e);
  })(),
  (function () {
    'use strict';
    function t(t, e) {
      return t.triggerPoint - e.triggerPoint;
    }
    function e(t, e) {
      return e.triggerPoint - t.triggerPoint;
    }
    function i(t) {
      (this.name = t.name),
        (this.axis = t.axis),
        (this.id = this.name + '-' + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (o[this.axis][this.name] = this);
    }
    var o = {
        vertical: {},
        horizontal: {},
      },
      n = window.Waypoint;
    (i.prototype.add = function (t) {
      this.waypoints.push(t);
    }),
      (i.prototype.clearTriggerQueues = function () {
        this.triggerQueues = {
          up: [],
          down: [],
          left: [],
          right: [],
        };
      }),
      (i.prototype.flushTriggers = function () {
        for (var i in this.triggerQueues) {
          var o = this.triggerQueues[i],
            n = 'up' === i || 'left' === i;
          o.sort(n ? e : t);
          for (var r = 0, s = o.length; s > r; r += 1) {
            var a = o[r];
            (a.options.continuous || r === o.length - 1) && a.trigger([i]);
          }
        }
        this.clearTriggerQueues();
      }),
      (i.prototype.next = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints),
          o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1];
      }),
      (i.prototype.previous = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null;
      }),
      (i.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t);
      }),
      (i.prototype.remove = function (t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1);
      }),
      (i.prototype.first = function () {
        return this.waypoints[0];
      }),
      (i.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1];
      }),
      (i.findOrCreate = function (t) {
        return o[t.axis][t.name] || new i(t);
      }),
      (n.Group = i);
  })(),
  (function () {
    'use strict';
    function t(t) {
      this.$element = e(t);
    }
    var e = window.jQuery,
      i = window.Waypoint;
    e.each(
      [
        'innerHeight',
        'innerWidth',
        'off',
        'offset',
        'on',
        'outerHeight',
        'outerWidth',
        'scrollLeft',
        'scrollTop',
      ],
      function (e, i) {
        t.prototype[i] = function () {
          var t = Array.prototype.slice.call(arguments);
          return this.$element[i].apply(this.$element, t);
        };
      }
    ),
      e.each(['extend', 'inArray', 'isEmptyObject'], function (i, o) {
        t[o] = e[o];
      }),
      i.adapters.push({
        name: 'jquery',
        Adapter: t,
      }),
      (i.Adapter = t);
  })(),
  (function () {
    'use strict';
    function t(t) {
      return function () {
        var i = [],
          o = arguments[0];
        return (
          t.isFunction(arguments[0]) &&
            ((o = t.extend({}, arguments[1])), (o.handler = arguments[0])),
          this.each(function () {
            var n = t.extend({}, o, {
              element: this,
            });
            'string' == typeof n.context &&
              (n.context = t(this).closest(n.context)[0]),
              i.push(new e(n));
          }),
          i
        );
      };
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
      window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
  })();

!(function (n, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((n =
        'undefined' != typeof globalThis ? globalThis : n || self).LazyLoad =
        t());
})(this, function () {
  'use strict';
  function n() {
    return (n =
      Object.assign ||
      function (n) {
        for (var t = 1; t < arguments.length; t++) {
          var e = arguments[t];
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
        }
        return n;
      }).apply(this, arguments);
  }
  var t = 'undefined' != typeof window,
    e =
      (t && !('onscroll' in window)) ||
      ('undefined' != typeof navigator &&
        /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
    i = t && 'IntersectionObserver' in window,
    a = t && 'classList' in document.createElement('p'),
    r = t && window.devicePixelRatio > 1,
    o = {
      elements_selector: '.lazy',
      container: e || t ? document : null,
      threshold: 300,
      thresholds: null,
      data_src: 'src',
      data_srcset: 'srcset',
      data_sizes: 'sizes',
      data_bg: 'bg',
      data_bg_hidpi: 'bg-hidpi',
      data_bg_multi: 'bg-multi',
      data_bg_multi_hidpi: 'bg-multi-hidpi',
      data_bg_set: 'bg-set',
      data_poster: 'poster',
      class_applied: 'applied',
      class_loading: 'loading',
      class_loaded: 'loaded',
      class_error: 'error',
      class_entered: 'entered',
      class_exited: 'exited',
      unobserve_completed: !0,
      unobserve_entered: !1,
      cancel_on_exit: !0,
      callback_enter: null,
      callback_exit: null,
      callback_applied: null,
      callback_loading: null,
      callback_loaded: null,
      callback_error: null,
      callback_finish: null,
      callback_cancel: null,
      use_native: !1,
      restore_on_error: !1,
    },
    c = function t(e) {
      return n({}, o, e);
    },
    l = function n(t, e) {
      var i,
        a = 'LazyLoad::Initialized',
        r = new t(e);
      try {
        i = new CustomEvent(a, {
          detail: {
            instance: r,
          },
        });
      } catch (o) {
        (i = document.createEvent('CustomEvent')).initCustomEvent(a, !1, !1, {
          instance: r,
        });
      }
      window.dispatchEvent(i);
    },
    s = 'srcset',
    u = 'sizes',
    f = 'poster',
    d = 'llOriginalAttrs',
    v = 'data',
    g = 'loading',
    b = 'loaded',
    p = 'applied',
    h = 'error',
    m = 'native',
    E = 'data-',
    I = 'll-status',
    y = function n(t, e) {
      return t.getAttribute(E + e);
    },
    k = function n(t, e, i) {
      var a = E + e;
      if (null === i) {
        t.removeAttribute(a);
        return;
      }
      t.setAttribute(a, i);
    },
    A = function n(t) {
      return y(t, I);
    },
    L = function n(t, e) {
      return k(t, I, e);
    },
    O = function n(t) {
      return L(t, null);
    },
    x = function n(t) {
      return null === A(t);
    },
    C = function n(t) {
      return A(t) === m;
    },
    _ = [g, b, p, h],
    N = function n(t, e, i, a) {
      if (t) {
        if (void 0 !== a) {
          t(e, i, a);
          return;
        }
        if (void 0 !== i) {
          t(e, i);
          return;
        }
        t(e);
      }
    },
    $ = function n(t, e) {
      if (a) {
        t.classList.add(e);
        return;
      }
      t.className += (t.className ? ' ' : '') + e;
    },
    M = function n(t, e) {
      if (a) {
        t.classList.remove(e);
        return;
      }
      t.className = t.className
        .replace(RegExp('(^|\\s+)' + e + '(\\s+|$)'), ' ')
        .replace(/^\s+/, '')
        .replace(/\s+$/, '');
    },
    z = function n(t) {
      t.llTempImage = document.createElement('IMG');
    },
    R = function n(t) {
      delete t.llTempImage;
    },
    T = function n(t) {
      return t.llTempImage;
    },
    w = function n(t, e) {
      if (e) {
        var i = e._observer;
        i && i.unobserve(t);
      }
    },
    G = function n(t) {
      t.disconnect();
    },
    D = function n(t, e, i) {
      e.unobserve_entered && w(t, i);
    },
    V = function n(t, e) {
      t && (t.loadingCount += e);
    },
    F = function n(t) {
      t && (t.toLoadCount -= 1);
    },
    H = function n(t, e) {
      t && (t.toLoadCount = e);
    },
    P = function n(t) {
      for (var e, i = [], a = 0; (e = t.children[a]); a += 1)
        'SOURCE' === e.tagName && i.push(e);
      return i;
    },
    j = function n(t, e) {
      var i = t.parentNode;
      i && 'PICTURE' === i.tagName && P(i).forEach(e);
    },
    B = function n(t, e) {
      P(t).forEach(e);
    },
    J = ['src'],
    S = ['src', f],
    U = ['src', s, u],
    q = [v],
    K = function n(t) {
      return !!t[d];
    },
    Q = function n(t) {
      return t[d];
    },
    W = function n(t) {
      return delete t[d];
    },
    X = function n(t, e) {
      if (!K(t)) {
        var i = {};
        e.forEach(function (n) {
          i[n] = t.getAttribute(n);
        }),
          (t[d] = i);
      }
    },
    Y = function n(t) {
      !K(t) &&
        (t[d] = {
          backgroundImage: t.style.backgroundImage,
        });
    },
    Z = function n(t, e, i) {
      if (!i) {
        t.removeAttribute(e);
        return;
      }
      t.setAttribute(e, i);
    },
    nn = function n(t, e) {
      if (K(t)) {
        var i = Q(t);
        e.forEach(function (n) {
          Z(t, n, i[n]);
        });
      }
    },
    nt = function n(t) {
      if (K(t)) {
        var e = Q(t);
        t.style.backgroundImage = e.backgroundImage;
      }
    },
    ne = function n(t, e, i) {
      $(t, e.class_applied),
        L(t, p),
        i && (e.unobserve_completed && w(t, e), N(e.callback_applied, t, i));
    },
    ni = function n(t, e, i) {
      $(t, e.class_loading),
        L(t, g),
        i && (V(i, 1), N(e.callback_loading, t, i));
    },
    na = function n(t, e, i) {
      i && t.setAttribute(e, i);
    },
    nr = function n(t, e) {
      na(t, u, y(t, e.data_sizes)),
        na(t, s, y(t, e.data_srcset)),
        na(t, 'src', y(t, e.data_src));
    },
    no = function n(t, e, i) {
      var a = y(t, e.data_bg),
        o = y(t, e.data_bg_hidpi),
        c = r && o ? o : a;
      if (c) {
        var l = y(t, 'bg-var');
        l
          ? t.style.setProperty(l, 'url("'.concat(c, '")'))
          : (t.style.backgroundImage = 'url("'.concat(c, '")')),
          T(t).setAttribute('src', c),
          ni(t, e, i);
      }
    },
    nc = function n(t, e, i) {
      var a = y(t, e.data_bg_multi),
        o = y(t, e.data_bg_multi_hidpi),
        c = r && o ? o : a;
      c && ((t.style.backgroundImage = c), ne(t, e, i));
    },
    nl = function n(t, e, i) {
      var a = y(t, e.data_bg_set);
      if (a) {
        var r = a.split('|'),
          o = r.map(function (n) {
            return 'image-set('.concat(n, ')');
          });
        (t.style.backgroundImage = o.join()),
          '' === t.style.backgroundImage &&
            ((o = r.map(function (n) {
              return '-webkit-image-set('.concat(n, ')');
            })),
            (t.style.backgroundImage = o.join())),
          ne(t, e, i);
      }
    },
    ns = {
      IMG: function n(t, e) {
        j(t, function (n) {
          X(n, U), nr(n, e);
        }),
          X(t, U),
          nr(t, e);
      },
      IFRAME: function n(t, e) {
        X(t, J), na(t, 'src', y(t, e.data_src));
      },
      VIDEO: function n(t, e) {
        B(t, function (n) {
          X(n, J), na(n, 'src', y(n, e.data_src));
        }),
          X(t, S),
          na(t, f, y(t, e.data_poster)),
          na(t, 'src', y(t, e.data_src)),
          t.load();
      },
      OBJECT: function n(t, e) {
        X(t, q), na(t, v, y(t, e.data_src));
      },
    },
    nu = function n(t, e) {
      var i = ns[t.tagName];
      i && i(t, e);
    },
    nf = function n(t, e, i) {
      var a = ns[t.tagName];
      a && (a(t, e), ni(t, e, i));
    },
    nd = ['IMG', 'IFRAME', 'VIDEO', 'OBJECT'],
    n8 = function n(t, e) {
      var i, a;
      e &&
        !((i = e).loadingCount > 0) &&
        !((a = e).toLoadCount > 0) &&
        N(t.callback_finish, e);
    },
    nv = function n(t, e, i) {
      t.addEventListener(e, i), (t.llEvLisnrs[e] = i);
    },
    ng = function n(t, e, i) {
      t.removeEventListener(e, i);
    },
    nb = function n(t) {
      return !!t.llEvLisnrs;
    },
    np = function n(t, e, i) {
      nb(t) || (t.llEvLisnrs = {});
      var a = 'VIDEO' === t.tagName ? 'loadeddata' : 'load';
      nv(t, a, e), nv(t, 'error', i);
    },
    nh = function n(t) {
      if (nb(t)) {
        var e = t.llEvLisnrs;
        for (var i in e) {
          var a = e[i];
          ng(t, i, a);
        }
        delete t.llEvLisnrs;
      }
    },
    nm = function n(t, e, i) {
      R(t),
        V(i, -1),
        F(i),
        M(t, e.class_loading),
        e.unobserve_completed && w(t, i);
    },
    nE = function n(t, e, i, a) {
      var r = C(e);
      nm(e, i, a),
        $(e, i.class_loaded),
        L(e, b),
        N(i.callback_loaded, e, a),
        r || n8(i, a);
    },
    nI = function n(t, e, i, a) {
      var r = C(e);
      nm(e, i, a),
        $(e, i.class_error),
        L(e, h),
        N(i.callback_error, e, a),
        i.restore_on_error && nn(e, U),
        r || n8(i, a);
    },
    ny = function n(t, e, i) {
      var a = T(t) || t;
      if (!nb(a)) {
        var r = function n(r) {
            nE(r, t, e, i), nh(a);
          },
          o = function n(r) {
            nI(r, t, e, i), nh(a);
          };
        np(a, r, o);
      }
    },
    nk = function n(t, e, i) {
      z(t), ny(t, e, i), Y(t), no(t, e, i), nc(t, e, i), nl(t, e, i);
    },
    nA = function n(t, e, i) {
      ny(t, e, i), nf(t, e, i);
    },
    nL = function n(t, e, i) {
      var a;
      ((a = t), nd.indexOf(a.tagName) > -1) ? nA(t, e, i) : nk(t, e, i);
    },
    nO = function n(t, e, i) {
      t.setAttribute('loading', 'lazy'), ny(t, e, i), nu(t, e), L(t, m);
    },
    nx = function n(t) {
      t.removeAttribute('src'), t.removeAttribute(s), t.removeAttribute(u);
    },
    nC = function n(t) {
      j(t, function (n) {
        nx(n);
      }),
        nx(t);
    },
    n_ = function n(t) {
      j(t, function (n) {
        nn(n, U);
      }),
        nn(t, U);
    },
    nN = {
      IMG: n_,
      IFRAME: function n(t) {
        nn(t, J);
      },
      VIDEO: function n(t) {
        B(t, function (n) {
          nn(n, J);
        }),
          nn(t, S),
          t.load();
      },
      OBJECT: function n(t) {
        nn(t, q);
      },
    },
    n$ = function n(t) {
      var e = nN[t.tagName];
      if (!e) {
        nt(t);
        return;
      }
      e(t);
    },
    nM = function n(t, e) {
      !(x(t) || C(t)) &&
        (M(t, e.class_entered),
        M(t, e.class_exited),
        M(t, e.class_applied),
        M(t, e.class_loading),
        M(t, e.class_loaded),
        M(t, e.class_error));
    },
    nz = function n(t, e) {
      n$(t), nM(t, e), O(t), W(t);
    },
    nR = function n(t, e, i, a) {
      var r;
      if (i.cancel_on_exit)
        A((r = t)) === g &&
          'IMG' === t.tagName &&
          (nh(t),
          nC(t),
          n_(t),
          M(t, i.class_loading),
          V(a, -1),
          O(t),
          N(i.callback_cancel, t, e, a));
    },
    nT = function n(t, e, i, a) {
      var r,
        o = ((r = t), _.indexOf(A(r)) >= 0);
      L(t, 'entered'),
        $(t, i.class_entered),
        M(t, i.class_exited),
        D(t, i, a),
        N(i.callback_enter, t, e, a),
        o || nL(t, i, a);
    },
    nw = function n(t, e, i, a) {
      x(t) ||
        ($(t, i.class_exited), nR(t, e, i, a), N(i.callback_exit, t, e, a));
    },
    nG = ['IMG', 'IFRAME', 'VIDEO'],
    nD = function n(t) {
      return t.use_native && 'loading' in HTMLImageElement.prototype;
    },
    nV = function n(t, e, i) {
      t.forEach(function (n) {
        -1 !== nG.indexOf(n.tagName) && nO(n, e, i);
      }),
        H(i, 0);
    },
    nF = function n(t, e, i) {
      t.forEach(function (n) {
        var t;
        return (t = n).isIntersecting || t.intersectionRatio > 0
          ? nT(n.target, n, e, i)
          : nw(n.target, n, e, i);
      });
    },
    nH = function n(t, e) {
      e.forEach(function (n) {
        t.observe(n);
      });
    },
    nP = function n(t, e) {
      G(t), nH(t, e);
    },
    nj = function n(t, e) {
      var a;
      !(!i || nD(t)) &&
        (e._observer = new IntersectionObserver(
          function (n) {
            nF(n, t, e);
          },
          {
            root: (a = t).container === document ? null : a.container,
            rootMargin: a.thresholds || a.threshold + 'px',
          }
        ));
    },
    nB = function n(t) {
      return Array.prototype.slice.call(t);
    },
    nJ = function n(t) {
      return t.container.querySelectorAll(t.elements_selector);
    },
    nS = function n(t) {
      var e;
      return A((e = t)) === h;
    },
    nU = function n(t, e) {
      var i;
      return (i = t || nJ(e)), nB(i).filter(x);
    },
    n9 = function n(t, e) {
      var i;
      ((i = nJ(t)), nB(i).filter(nS)).forEach(function (n) {
        M(n, t.class_error), O(n);
      }),
        e.update();
    },
    nq = function n(e, i) {
      t &&
        ((i._onlineHandler = function () {
          n9(e, i);
        }),
        window.addEventListener('online', i._onlineHandler));
    },
    n1 = function n(e) {
      t && window.removeEventListener('online', e._onlineHandler);
    },
    nK = function n(t, e) {
      var i = c(t);
      (this._settings = i),
        (this.loadingCount = 0),
        nj(i, this),
        nq(i, this),
        this.update(e);
    };
  return (
    (nK.prototype = {
      update: function n(t) {
        var a = this._settings,
          r = nU(t, a);
        if ((H(this, r.length), e || !i)) {
          this.loadAll(r);
          return;
        }
        if (nD(a)) {
          nV(r, a, this);
          return;
        }
        nP(this._observer, r);
      },
      destroy: function n() {
        this._observer && this._observer.disconnect(),
          n1(this),
          nJ(this._settings).forEach(function (n) {
            W(n);
          }),
          delete this._observer,
          delete this._settings,
          delete this._onlineHandler,
          delete this.loadingCount,
          delete this.toLoadCount;
      },
      loadAll: function n(t) {
        var e = this,
          i = this._settings;
        nU(t, i).forEach(function (n) {
          w(n, e), nL(n, i, e);
        });
      },
      restoreAll: function n() {
        var t = this._settings;
        nJ(t).forEach(function (n) {
          nz(n, t);
        });
      },
    }),
    (nK.load = function (n, t) {
      var e = c(t);
      nL(n, e);
    }),
    (nK.resetStatus = function (n) {
      O(n);
    }),
    t &&
      (function n(t, e) {
        if (e) {
          if (e.length) for (var i, a = 0; (i = e[a]); a += 1) l(t, i);
          else l(t, e);
        }
      })(nK, window.lazyLoadOptions),
    nK
  );
});

('use strict');
(self.blocksyJsonP = self.blocksyJsonP || []).push([
  [921, 142],
  {
    7142: function (t, e, n) {
      n.r(e),
        n.d(e, {
          mountMenuLevel: function () {
            return m;
          },
        });
      var i = n(3846),
        r = n(9257);
      const o = function () {
          return 'rtl' === document.querySelector('html').dir;
        },
        s = function (t) {
          return (
            t.className.includes('animated-submenu') &&
            (!t.parentNode.classList.contains('menu') ||
              (-1 === t.className.indexOf('ct-mega-menu') &&
                t.parentNode.classList.contains('menu')))
          );
        };
      const c = function (t, e) {
          const n = [];
          for (; t.parentNode !== e; ) n.push(t.parentNode), (t = t.parentNode);
          return n;
        },
        u = function (t) {
          return o()
            ? 'left' === t
              ? 'right'
              : 'right' === t
              ? 'left'
              : t
            : t;
        },
        a = function (t) {
          let e = (function (t, e) {
            for (var n = []; t.parentNode; )
              t.parentNode &&
                t.parentNode.matches &&
                t.parentNode.matches(e) &&
                n.push(t.parentNode),
                (t = t.parentNode);
            return n[n.length - 1];
          })(t, 'li.menu-item');
          if (!e) return u('right');
          const n = [...e.querySelectorAll('.sub-menu')].map(function (t) {
            return {
              el: t,
              parents: c(t, e),
            };
          });
          if (0 === n.length) return u('right');
          const i = n
              .sort(function (t, e) {
                return t.parents.length - e.parents.length;
              })
              .reverse()[0],
            r = [
              ...i.parents.filter(function (t) {
                return t.matches('.sub-menu');
              }),
              i.el,
            ],
            s = r.reduce(function (t, e, n) {
              const i = getComputedStyle(e);
              return (
                t +
                e.getBoundingClientRect().width +
                (0 === n
                  ? 0
                  : parseFloat(
                      i.getPropertyValue('--dropdown-horizontal-offset') ||
                        '5px'
                    ))
              );
            }, 0),
            a = e.getBoundingClientRect();
          let l = s < a.right,
            d = innerWidth - a.left > s;
          return (
            e.matches('.animated-submenu-inline') &&
              (d = innerWidth - a.left - a.width > s),
            o()
              ? l || d
                ? l
                  ? 'left'
                  : 'right'
                : 'left'
              : l || d
              ? d
                ? 'right'
                : 'left'
              : 'right'
          );
        },
        l = function (t) {
          const e = t.target.closest('li');
          e.__closeSubmenuTimer__ &&
            (clearTimeout(e.__closeSubmenuTimer__),
            (e.__closeSubmenuTimer__ = null)),
            e.classList.add('ct-active');
          let n = [...e.children].find(function (t) {
            return t.matches('.ct-toggle-dropdown-desktop-ghost');
          });
          if (
            (n || (n = e.firstElementChild),
            n &&
              (n.setAttribute('aria-expanded', 'true'),
              'button' === n.tagName.toLowerCase() &&
                n.setAttribute(
                  'aria-label',
                  ct_localizations.collapse_submenu
                )),
            !s(e))
          )
            return;
          const i = e.querySelector('.sub-menu');
          m(i),
            i.closest('[data-interaction="hover"]') &&
              i.parentNode.addEventListener(
                'mouseleave',
                function () {
                  [...i.children]
                    .filter(function (t) {
                      return s(t);
                    })
                    .map(function (t) {
                      return t.removeAttribute('data-submenu');
                    });
                },
                {
                  once: !0,
                }
              );
        },
        d = function (t) {
          if (!t.target) return;
          const e = t.target.closest('li');
          e.classList.remove('ct-active');
          let n = [...e.children].find(function (t) {
            return t.matches('.ct-toggle-dropdown-desktop-ghost');
          });
          n || (n = e.firstElementChild),
            n &&
              (n.setAttribute('aria-expanded', 'false'),
              'button' === n.tagName.toLowerCase() &&
                n.setAttribute('aria-label', ct_localizations.expand_submenu),
              t.focusOnIndicator &&
                n.focus({
                  focusVisible: !0,
                })),
            (e.__closeSubmenuTimer__ = setTimeout(function () {
              (e.__closeSubmenuTimer__ = null),
                [...e.querySelectorAll('[data-submenu]')].map(function (t) {
                  t.removeAttribute('data-submenu');
                }),
                [...e.querySelectorAll('.ct-active')].map(function (t) {
                  t.classList.remove('ct-active');
                });
            }, 30));
        },
        f = function (t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (t.classList.contains('ct-mega-menu-custom-width')) {
            const e = t.querySelector('.sub-menu'),
              n = t.getBoundingClientRect(),
              i = e.getBoundingClientRect();
            if (
              !(
                n.left + n.width / 2 > i.width / 2 &&
                innerWidth - (n.left + n.width / 2) > i.width / 2
              )
            ) {
              const r = a(e);
              let o = 0,
                s = 15;
              'right' === r &&
                ((o =
                  -1 * Math.round(n.left - (innerWidth - i.width) + s) + 'px'),
                n.left + n.width / 2 > i.width / 2 ||
                  (o = -1 * Math.round(n.left - s) + 'px')),
                'left' === r &&
                  (o = -1 * Math.round(innerWidth - n.right - s) + 'px'),
                (t.dataset.submenu = r),
                e.style.setProperty('--theme-submenu-inline-offset', o);
            }
          }
          if (
            (s(t) &&
              (function (t, e) {
                let { startPosition: n = 'end' } = e;
                const i = t.querySelector('.sub-menu'),
                  r = a(i),
                  { left: o, width: s, right: c } = i.getBoundingClientRect();
                let u = r,
                  l = t.getBoundingClientRect();
                'left' === r &&
                  ('end' === n ? l.left : l.right) - s < 0 &&
                  (u = 'right');
                'right' === r &&
                  ('end' === n ? l.right : l.left) + s > innerWidth &&
                  (u = 'left');
                (t.dataset.submenu = u),
                  t.addEventListener('click', function () {});
              })(t, e),
            t.hasSubmenuEventListeners)
          )
            return;
          t.hasSubmenuEventListeners = !0;
          let n = t.matches('[data-interaction*="click"] *');
          if (
            (t.addEventListener('keydown', function (e) {
              27 == e.keyCode &&
                d({
                  target: t.firstElementChild,
                  focusOnIndicator: !0,
                });
            }),
            t.addEventListener('focusout', function (e) {
              t.contains(e.relatedTarget) ||
                d({
                  target: t.firstElementChild,
                });
            }),
            !n)
          ) {
            const e = function () {
              (0, r.O)()
                ? l({
                    target: t.firstElementChild,
                  })
                : requestAnimationFrame(function () {
                    l({
                      target: t.firstElementChild,
                    });
                  }),
                t.parentNode.classList.contains('.sub-menu') ||
                  [...t.parentNode.children]
                    .filter(function (e) {
                      return e !== t;
                    })
                    .map(function (t) {
                      d({
                        target: t.firstElementChild,
                      });
                    }),
                t.addEventListener(
                  'mouseleave',
                  function () {
                    d({
                      target: t.firstElementChild,
                    });
                  },
                  {
                    once: !0,
                  }
                );
            };
            t.addEventListener('mouseenter', e),
              t.matches(':hover') && e(),
              (0, i.b)() &&
                t.addEventListener('click', function (e) {
                  t.classList.contains('ct-active') || e.preventDefault();
                });
          }
          if (n) {
            (t.matches('[data-interaction*="item"] *')
              ? t.firstElementChild
              : t.firstElementChild.querySelector('.ct-toggle-dropdown-desktop')
            ).addEventListener('click', function (e) {
              e.preventDefault(),
                e.target.closest('li').classList.contains('ct-active')
                  ? d(e)
                  : (l(e),
                    (0, r.O)() &&
                      e.target.closest('li').addEventListener(
                        'mouseleave',
                        function () {
                          d({
                            target: t.firstElementChild,
                          });
                        },
                        {
                          once: !0,
                        }
                      ),
                    e.target.hasDocumentListener ||
                      ((e.target.hasDocumentListener = !0),
                      setTimeout(function () {
                        document.addEventListener('click', function (t) {
                          e.target.closest('li').contains(t.target) || d(e);
                        });
                      })));
            });
          }
          let o = [...t.children].find(function (t) {
            return t.matches('.ct-toggle-dropdown-desktop-ghost');
          });
          o &&
            o.addEventListener('click', function (t) {
              t.target.closest('li').classList.contains('ct-active')
                ? d(t)
                : l(t);
            });
        },
        m = function (t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          [...t.children]
            .filter(function (t) {
              return t.matches(
                '.menu-item-has-children, .page_item_has_children'
              );
            })
            .map(function (t) {
              f(t, e);
            });
        };
    },
    7921: function (t, e, n) {
      n.r(e),
        n.d(e, {
          mount: function () {
            return r;
          },
        });
      var i = n(7142);
      const r = function (t) {
        if (window.wp && wp && wp.customize && wp.customize('active_theme')) {
          const e = [...t.children].find(function (t) {
            return t.matches('.ct-mega-menu:not(.ct-mega-menu-custom-width)');
          });
          if (e) {
            e.querySelector('.sub-menu').style.left =
              Math.round(
                e
                  .closest('[class*="ct-container"]')
                  .firstElementChild.getBoundingClientRect().x
              ) -
              Math.round(e.closest('nav').getBoundingClientRect().x) +
              'px';
          }
        }
        (0, i.mountMenuLevel)(t, {
          startPosition: 'left',
        });
      };
    },
  },
]);

!(function () {
  var e,
    t,
    n = {
      9139: function (e, t, n) {
        'use strict';
        n.d(t, {
          Z: function () {
            return o;
          },
        });
        let r = null;
        window.IntersectionObserver &&
          (r = new IntersectionObserver(function (e) {
            return e
              .filter(function (e) {
                let { isIntersecting: t } = e;
                return t;
              })
              .map(function (e) {
                let { target: t } = e;
                return t;
              })
              .filter(function (e) {
                return (e.dataset.reveal || '').indexOf('no') > -1;
              })
              .map(function (e, t) {
                let n = (e.dataset.reveal || '').indexOf('bottom') > -1;
                e.dataset.reveal = n ? `yes:${t + 1}` : 'yes';
              });
          }));
        const o = function (e) {
          if (!window.IntersectionObserver) return;
          let t = e.querySelectorAll('[data-reveal*="no"]');
          0 !== t.length &&
            t[0].dataset.reveal &&
            [...t].map(function (e) {
              return r.observe(e);
            });
        };
      },
      4254: function (e, t, n) {
        'use strict';
        n.d(t, {
          B: function () {
            return u;
          },
          a: function () {
            return c;
          },
        });
        var r = n(2248);
        function o(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function i(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e, t) {
                if ('object' != typeof e || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, t || 'default');
                  if ('object' != typeof r) return r;
                  throw new TypeError(
                    '@@toPrimitive must return a primitive value.'
                  );
                }
                return ('string' === t ? String : Number)(e);
              })(e, 'string');
              return 'symbol' == typeof t ? t : String(t);
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        const c = function (e, t) {
            if (
              ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? o(Object(n), !0).forEach(function (t) {
                        i(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : o(Object(n)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        );
                      });
                }
                return e;
              })(
                {
                  container: null,
                  openStrategy: 'full',
                },
                t
              )),
              document.body.hasAttribute('data-panel') &&
                'skip' !== t.openStrategy)
            )
              return;
            const c = function () {
                'skip' !== t.openStrategy &&
                  requestAnimationFrame(function () {
                    t.container.classList.add('active'),
                      (document.body.dataset.panel =
                        'in' +
                        (t.container.dataset.behaviour.indexOf('left') > -1
                          ? ':left'
                          : t.container.dataset.behaviour.indexOf('right') > -1
                          ? ':right'
                          : ''));
                  }),
                  ('full' !== t.openStrategy && 'skip' !== t.openStrategy) ||
                    n
                      .e(421)
                      .then(n.bind(n, 3421))
                      .then(function (n) {
                        let { handleClick: r } = n;
                        r(e, t);
                      });
              },
              u = ct_localizations.dynamic_styles_selectors.filter(function (
                e
              ) {
                return (
                  t.container.matches(e.selector) ||
                  t.container.querySelector(e.selector)
                );
              });
            u.length > 0
              ? Promise.all(
                  u.map(function (e) {
                    return (0, r.Xr)(e.url);
                  })
                ).then(c)
              : c();
          },
          u = function (e, t) {
            let { event: n, focus: r = !1 } = t;
            c(n, {
              isModal: !0,
              container: document.querySelector(
                e.dataset.togglePanel || e.hash
              ),
              clickOutside: !0,
              focus: r,
            });
          };
      },
      6130: function (e, t, n) {
        'use strict';
        n.d(t, {
          C: function () {
            return u;
          },
        });
        n(1601);
        let r = null,
          o = matchMedia('all and (max-width: 689px)'),
          i = matchMedia('all and (max-width: 999px)');
        const c = function () {
          r = o.matches ? 'mobile' : i.matches ? 'tablet' : 'desktop';
        };
        c(),
          o.addListener(function () {
            return c();
          }),
          i.addListener(function () {
            return c();
          });
        const u = function () {
          let { withTablet: e = !1 } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return e ? r : 'tablet' === r ? 'mobile' : r;
        };
      },
      9257: function (e, t, n) {
        'use strict';
        n.d(t, {
          O: function () {
            return r;
          },
        });
        const r = function () {
          return (
            'undefined' != typeof window &&
            window.navigator &&
            window.navigator.platform &&
            (/iP(ad|hone|od)/.test(window.navigator.platform) ||
              ('MacIntel' === window.navigator.platform &&
                window.navigator.maxTouchPoints > 1))
          );
        };
      },
      3846: function (e, t, n) {
        'use strict';
        n.d(t, {
          b: function () {
            return r;
          },
        });
        const r = function () {
          return (
            'ontouchstart' in window ||
            navigator.maxTouchPoints > 0 ||
            navigator.msMaxTouchPoints > 0
          );
        };
      },
      2248: function (e, t, n) {
        'use strict';
        n.d(t, {
          Cg: function () {
            return v;
          },
          XT: function () {
            return h;
          },
          Xr: function () {
            return b;
          },
        });
        var r = n(1601),
          o = n.n(r),
          i = n(3846),
          c = n(9257),
          u = n(2194),
          a = n.n(u);
        const l = ['mount', 'el'];
        function s(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function d(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? s(Object(n), !0).forEach(function (t) {
                  f(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : s(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function f(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e, t) {
                if ('object' != typeof e || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, t || 'default');
                  if ('object' != typeof r) return r;
                  throw new TypeError(
                    '@@toPrimitive must return a primitive value.'
                  );
                }
                return ('string' === t ? String : Number)(e);
              })(e, 'string');
              return 'symbol' == typeof t ? t : String(t);
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function m(e, t) {
          if (null == e) return {};
          var n,
            r,
            o = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                i = Object.keys(e);
              for (r = 0; r < i.length; r++)
                (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]),
                t.indexOf(n) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (o[n] = e[n]));
          }
          return o;
        }
        const p = function (e) {
            let {
              els: t,
              events: n,
              forcedEvents: r,
              load: o,
              mount: u,
              condition: s,
              trigger: f,
            } = e;
            t || (t = []),
              n || (n = []),
              r || (r = []),
              f || (f = []),
              (f = f.map(function (e) {
                return 'string' == typeof e
                  ? {
                      id: e,
                    }
                  : e;
              })),
              u ||
                (u = function (e) {
                  let { mount: t, el: n } = e,
                    r = m(e, l);
                  return n ? t(n, r) : t();
                }),
              t && '[object Function]' === {}.toString.call(t) && (t = t());
            const p = (Array.isArray(t) ? t : [t]).reduce(function (e, t) {
              return [
                ...e,
                ...(Array.isArray(t)
                  ? t
                  : 'string' == typeof t
                  ? document.querySelectorAll(t)
                  : [t]),
              ];
            }, []);
            0 !== p.length &&
              ((s &&
                !s({
                  els: t,
                  allEls: p,
                })) ||
                (0 !== f.length
                  ? f.forEach(function (e) {
                      if (
                        ('click' === e.id &&
                          p.map(function (t) {
                            t.hasLazyLoadClickListener ||
                              ((t.hasLazyLoadClickListener = !0),
                              t.addEventListener(
                                'click',
                                function (e) {
                                  e.stopPropagation(),
                                    e.preventDefault(),
                                    o().then(function (n) {
                                      return u(
                                        d(
                                          d({}, n),
                                          {},
                                          {
                                            event: e,
                                            el: t,
                                          }
                                        )
                                      );
                                    });
                                },
                                d(
                                  {},
                                  e.once
                                    ? {
                                        once: !0,
                                      }
                                    : {}
                                )
                              ));
                          }),
                        'change' === e.id &&
                          p.map(function (e) {
                            if (e.hasLazyLoadChangeListener) return;
                            e.hasLazyLoadChangeListener = !0;
                            const t = function (t) {
                              t.preventDefault(),
                                o().then(function (n) {
                                  return u(
                                    d(
                                      d({}, n),
                                      {},
                                      {
                                        event: t,
                                        el: e,
                                      }
                                    )
                                  );
                                });
                            };
                            a()
                              ? a()(e).on('change', t)
                              : e.addEventListener('change', t);
                          }),
                        'scroll' === e.id &&
                          p.map(function (e) {
                            e.hasLazyLoadScrollListener ||
                              ((e.hasLazyLoadScrollListener = !0),
                              setTimeout(function () {
                                let t = scrollY,
                                  n = function (r) {
                                    if (e.parentNode)
                                      return Math.abs(scrollY - t) > 30
                                        ? (document.removeEventListener(
                                            'scroll',
                                            n
                                          ),
                                          void o().then(function (t) {
                                            return u(
                                              d(
                                                d({}, t),
                                                {},
                                                {
                                                  event: r,
                                                  el: e,
                                                }
                                              )
                                            );
                                          }))
                                        : void 0;
                                    document.removeEventListener('scroll', n);
                                  };
                                document.addEventListener('scroll', n);
                              }, 500));
                          }),
                        'slight-mousemove' === e.id &&
                          !document.body.hasSlightMousemoveListenerTheme)
                      ) {
                        document.body.hasSlightMousemoveListenerTheme = !0;
                        const e = function (e) {
                          p.map(function (e) {
                            o().then(function (t) {
                              return u(
                                d(
                                  d({}, t),
                                  {},
                                  {
                                    el: e,
                                  }
                                )
                              );
                            });
                          });
                        };
                        document.addEventListener('mousemove', e, {
                          once: !0,
                        });
                      }
                      'input' === e.id &&
                        p.map(function (e) {
                          e.hasLazyLoadInputListener ||
                            ((e.hasLazyLoadInputListener = !0),
                            e.addEventListener(
                              'input',
                              function (t) {
                                return o().then(function (t) {
                                  return u(
                                    d(
                                      d({}, t),
                                      {},
                                      {
                                        el: e,
                                      }
                                    )
                                  );
                                });
                              },
                              {
                                once: !0,
                              }
                            ));
                        }),
                        'hover-with-touch' === e.id &&
                          p.map(function (e) {
                            e.hasLazyLoadMouseOverListener ||
                              (e.dataset.autoplay &&
                              parseFloat(e.dataset.autoplay)
                                ? setTimeout(function () {
                                    o().then(function (t) {
                                      return u(
                                        d(
                                          d({}, t),
                                          {},
                                          {
                                            el: e,
                                          }
                                        )
                                      );
                                    });
                                  }, 10)
                                : ((e.hasLazyLoadMouseOverListener = !0),
                                  (e.forcedMount = function () {
                                    let t =
                                      arguments.length > 0 &&
                                      void 0 !== arguments[0]
                                        ? arguments[0]
                                        : {};
                                    return o().then(function (n) {
                                      return u(
                                        d(
                                          d({}, n),
                                          {},
                                          {
                                            el: e,
                                          },
                                          t
                                        )
                                      );
                                    });
                                  }),
                                  [
                                    'mouseover',
                                    ...((0, i.b)() ? ['touchstart'] : []),
                                  ].map(function (t) {
                                    e.addEventListener(
                                      t,
                                      function (t) {
                                        'touchstart' === t.type
                                          ? document.addEventListener(
                                              'touchmove',
                                              function () {
                                                e.forcedMount({
                                                  event: t,
                                                });
                                              },
                                              {
                                                once: !0,
                                              }
                                            )
                                          : e.forcedMount();
                                      },
                                      {
                                        once: !0,
                                        passive: !0,
                                      }
                                    );
                                  })));
                          }),
                        'hover-with-click' === e.id &&
                          p.map(function (e) {
                            if (e.hasLazyLoadClickHoverListener) return;
                            e.hasLazyLoadClickHoverListener = !0;
                            const t = function (t) {
                              o().then(function (n) {
                                return u(
                                  d(
                                    d({}, n),
                                    {},
                                    {
                                      event: t,
                                      el: e,
                                    }
                                  )
                                );
                              });
                            };
                            let n = !1;
                            e.addEventListener(
                              'mouseover',
                              function (e) {
                                (0, i.b)() &&
                                  (n = setTimeout(function () {
                                    (n = !0), t(e);
                                  }, 500)),
                                  (0, i.b)() || t(e);
                              },
                              {
                                once: !0,
                              }
                            ),
                              (0, i.b)() &&
                                e.addEventListener(
                                  'click',
                                  function (e) {
                                    (0, c.O)() || e.preventDefault(),
                                      !0 !== n &&
                                        (!1 !== n && clearTimeout(n), t(e));
                                  },
                                  {
                                    once: !0,
                                  }
                                ),
                              e.addEventListener('focus', t, {
                                once: !0,
                              });
                          }),
                        'hover' === e.id &&
                          p.map(function (e) {
                            e.hasLazyLoadMouseOverListener ||
                              ((e.hasLazyLoadHoverListener = !0),
                              e.addEventListener(
                                'mouseover',
                                function (t) {
                                  o().then(function (n) {
                                    return u(
                                      d(
                                        d({}, n),
                                        {},
                                        {
                                          event: t,
                                          el: e,
                                        }
                                      )
                                    );
                                  });
                                },
                                {
                                  once: !0,
                                }
                              ));
                          }),
                        'submit' === e.id &&
                          p.map(function (e) {
                            e.hasLazyLoadSubmitListener ||
                              ((e.hasLazyLoadSubmitListener = !0),
                              e.addEventListener('submit', function (t) {
                                t.preventDefault(),
                                  o().then(function (n) {
                                    return u(
                                      d(
                                        d({}, n),
                                        {},
                                        {
                                          event: t,
                                          el: e,
                                        }
                                      )
                                    );
                                  });
                              }));
                          });
                    })
                  : o().then(function (e) {
                      p.map(function (t) {
                        u(
                          d(
                            d({}, e),
                            {},
                            {
                              el: t,
                            }
                          )
                        );
                      });
                    })));
          },
          v = function (e) {
            /comp|inter|loaded/.test(document.readyState)
              ? e()
              : document.addEventListener('DOMContentLoaded', e, !1);
          },
          h = function (e, t) {
            const { immediate: n = !1, skipEvents: r = !1 } = t || {};
            r ||
              [
                ...new Set(
                  e.reduce(function (e, t) {
                    return [
                      ...e,
                      ...(t.events || []),
                      ...(t.forcedEvents || []),
                    ];
                  }, [])
                ),
              ].map(function (t) {
                o().on(t, function () {
                  e
                    .filter(function (e) {
                      let { events: n = [] } = e;
                      return n.indexOf(t) > -1;
                    })
                    .map(function (e) {
                      return p(
                        d(
                          d({}, e),
                          {},
                          {
                            trigger: [],
                          }
                        )
                      );
                    }),
                    e
                      .filter(function (e) {
                        let { forcedEvents: n = [] } = e;
                        return n.indexOf(t) > -1;
                      })
                      .map(function (e) {
                        return p(
                          d(
                            d(
                              d({}, e),
                              e.forcedEventsElsSkip
                                ? {}
                                : {
                                    els: ['body'],
                                  }
                            ),
                            {},
                            {
                              condition: function () {
                                return !0;
                              },
                              trigger: [],
                            }
                          )
                        );
                      });
                });
              });
            const i = function () {
              e.filter(function (e) {
                let { onLoad: t = !0 } = e;
                return '[object Function]' === {}.toString.call(t) ? t() : !!t;
              }).map(p);
            };
            n ? i() : v(i);
          };
        const b = function (e) {
          return new Promise(function (t, n) {
            document.querySelector(`[href="${e}"]`)
              ? t()
              : requestAnimationFrame(function () {
                  !(function (e, t) {
                    var n;
                    function r() {
                      !n && t && ((n = !0), t.call(e));
                    }
                    e.addEventListener && e.addEventListener('load', r),
                      e.attachEvent && e.attachEvent('onload', r),
                      'isApplicationInstalled' in navigator &&
                        'onloadcssdefined' in e &&
                        e.onloadcssdefined(r);
                  })(
                    (function (e, t, n, r) {
                      var o = document,
                        i = o.createElement('link');
                      if (t);
                      else {
                        var c = (o.body || o.getElementsByTagName('head')[0])
                          .childNodes;
                        c[c.length - 1];
                      }
                      var u = o.styleSheets;
                      (i.rel = 'stylesheet'),
                        (i.href = e),
                        document.body.appendChild(i);
                      var a = function (e) {
                        for (var t = i.href, n = u.length; n--; )
                          if (u[n].href === t) return e();
                        setTimeout(function () {
                          a(e);
                        });
                      };
                      function l() {
                        i.addEventListener && i.removeEventListener('load', l);
                      }
                      return (
                        i.addEventListener && i.addEventListener('load', l),
                        (i.onloadcssdefined = a),
                        a(l),
                        i
                      );
                    })(e),
                    function () {
                      requestAnimationFrame(function () {
                        t();
                      });
                    }
                  );
                });
          });
        };
      },
      1229: function (e, t, n) {
        'use strict';
        n.r(t),
          n.d(t, {
            areWeDealingWithSafari: function () {
              return M;
            },
            getCurrentScreen: function () {
              return l.C;
            },
            handleEntryPoints: function () {
              return a.XT;
            },
            loadDynamicChunk: function () {
              return j;
            },
            loadStyle: function () {
              return a.Xr;
            },
            onDocumentLoaded: function () {
              return a.Cg;
            },
            registerDynamicChunk: function () {
              return q;
            },
          });
        n(989);
        function r(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e, t) {
                if ('object' != typeof e || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, t || 'default');
                  if ('object' != typeof r) return r;
                  throw new TypeError(
                    '@@toPrimitive must return a primitive value.'
                  );
                }
                return ('string' === t ? String : Number)(e);
              })(e, 'string');
              return 'symbol' == typeof t ? t : String(t);
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        const o = new (class {
          constructor() {
            r(this, '_callbacksMap', {});
          }
          on(e, t) {
            const n = function (e) {
              t(e.detail);
            };
            (this._callbacksMap[t] = n), document.addEventListener(e, n);
          }
          once(e, t) {
            document.addEventListener(
              e,
              function (e) {
                t(e.detail);
              },
              {
                once: !0,
              }
            );
          }
          off(e, t) {
            document.removeEventListener(e, this._callbacksMap[t]);
          }
          trigger(e, t) {
            document.dispatchEvent(
              new CustomEvent(e, {
                detail: t,
              })
            );
          }
        })();
        window.ctEvents = o;
        var i = n(1601),
          c = n.n(i),
          u = n(9139),
          a = n(2248),
          l = n(6130),
          s = n(5277),
          d = n.n(s),
          f = n(4254);
        const m = {};
        var p = n(2194),
          v = n.n(p),
          h = n(3846);
        function b(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function g(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e, t) {
                if ('object' != typeof e || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, t || 'default');
                  if ('object' != typeof r) return r;
                  throw new TypeError(
                    '@@toPrimitive must return a primitive value.'
                  );
                }
                return ('string' === t ? String : Number)(e);
              })(e, 'string');
              return 'symbol' == typeof t ? t : String(t);
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        const y = {
          click: function (e, t, r, o) {
            return [...document.querySelectorAll(e.selector)].map(function (e) {
              if (e.hasLazyLoadClickListener) return;
              e.hasLazyLoadClickListener = !0;
              const i = function (i) {
                (t.ignore_click &&
                  (i.target.matches(t.ignore_click) ||
                    i.target.closest(t.ignore_click))) ||
                  (i.preventDefault(),
                  (e.closest('.ct-panel.active') &&
                    e.matches('.ct-header-account[href*="account-modal"]')) ||
                    (t.has_loader
                      ? 'button' === t.has_loader.type
                        ? n
                            .e(418)
                            .then(n.bind(n, 5418))
                            .then(function (n) {
                              let { bootButtonLoaderFlow: c } = n;
                              c({
                                el: e,
                                chunk: t,
                                event: i,
                                loadedChunks: o,
                                loadChunkWithPayload: r,
                              });
                            })
                        : n
                            .e(95)
                            .then(n.bind(n, 1095))
                            .then(function (n) {
                              let { bootModalLoaderFlow: c } = n;
                              c({
                                el: e,
                                event: i,
                                chunk: t,
                                loadedChunks: o,
                                loadChunkWithPayload: r,
                              });
                            })
                      : r(
                          t,
                          {
                            event: i,
                          },
                          e
                        )));
              };
              (e.dynamicJsChunkStop = function () {
                e.removeEventListener('click', i);
              }),
                e.addEventListener('click', i);
            });
          },
          scroll: function (e, t, n, r) {
            m[t.id] ||
              ((m[t.id] = !0),
              setTimeout(function () {
                let e = scrollY,
                  r = function (o) {
                    if (
                      Math.abs(scrollY - e) > 30 ||
                      window.innerHeight + Math.round(scrollY) >=
                        document.body.offsetHeight
                    )
                      return (
                        document.removeEventListener('scroll', r), void n(t)
                      );
                  };
                r(),
                  document.addEventListener('scroll', r, {
                    passive: !0,
                  });
              }, 500));
          },
          input: function (e, t, n) {
            [...document.querySelectorAll(e.selector)].map(function (e) {
              e.hasLazyLoadInputListener ||
                ((e.hasLazyLoadInputListener = !0),
                e.addEventListener('input', function (r) {
                  r.preventDefault(),
                    n(
                      t,
                      {
                        event: r,
                      },
                      e
                    );
                }));
            });
          },
          change: function (e, t, n) {
            [...document.querySelectorAll(e.selector)].map(function (e) {
              e.hasLazyLoadChangeListener ||
                ((e.hasLazyLoadChangeListener = !0),
                e.addEventListener('change', function (r) {
                  r.preventDefault(),
                    n(
                      t,
                      {
                        event: r,
                      },
                      e
                    );
                }));
            });
          },
          submit: function (e, t, n) {
            [...document.querySelectorAll(e.selector)].map(function (e) {
              e.hasLazyLoadSubmitListener ||
                ((e.hasLazyLoadSubmitListener = !0),
                v()
                  ? v()(e).on('submit', function (r) {
                      r.preventDefault(),
                        n(
                          t,
                          {
                            event: r,
                          },
                          e
                        );
                    })
                  : e.addEventListener('submit', function (r) {
                      r.preventDefault(),
                        n(
                          t,
                          {
                            event: r,
                          },
                          e
                        );
                    }));
            });
          },
          hover: function (e, t, n) {
            (t.skipOnTouchDevices && (0, h.b)()) ||
              [...document.querySelectorAll(e.selector)].map(function (e) {
                e.hasLazyLoadHoverListener ||
                  ((e.hasLazyLoadHoverListener = !0),
                  e.addEventListener('mouseover', function (r) {
                    r.preventDefault(),
                      n(
                        t,
                        {
                          event: r,
                        },
                        e
                      );
                  }));
              });
          },
          'slight-mousemove': function (e, t, n) {
            const r = document.querySelector(e.selector);
            if (!document.body.hasSlightMousemoveListener && r) {
              document.body.hasSlightMousemoveListener = !0;
              const r = function (o) {
                document.removeEventListener('mousemove', r),
                  n(
                    t,
                    {
                      event: o,
                    },
                    [...document.querySelectorAll(e.selector)]
                  );
              };
              document.addEventListener('mousemove', r);
            }
          },
          'jquery-event': function (e, t, n) {
            (e = (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? b(Object(n), !0).forEach(function (t) {
                      g(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : b(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
              }
              return e;
            })(
              {
                matchTarget: !0,
              },
              e
            )),
              document.body.ctHasJqueryEventListener ||
                (document.body.ctHasJqueryEventListener = {}),
              document.body.ctHasJqueryEventListener[t.id] ||
                ((document.body.ctHasJqueryEventListener[t.id] = !0),
                e.events.map(function (r) {
                  v()(document.body).on(r, function (r, o) {
                    let i = document.body;
                    if (e.matchTarget) {
                      if (!r.target.closest('.product')) return;
                      if (
                        ((i = r.target
                          .closest('.product')
                          .querySelector(e.selector)),
                        !i)
                      )
                        return;
                    }
                    for (
                      var c = arguments.length,
                        u = new Array(c > 2 ? c - 2 : 0),
                        a = 2;
                      a < c;
                      a++
                    )
                      u[a - 2] = arguments[a];
                    n(
                      t,
                      {
                        event: r,
                        eventData: o,
                        eventArguments: u,
                      },
                      i
                    );
                  });
                }));
          },
          cookie: function (e, t, n) {
            t.cookieAbsent &&
              -1 === document.cookie.indexOf(t.cookieAbsent) &&
              n(t, {});
          },
        };
        function L(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function O(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? L(Object(n), !0).forEach(function (t) {
                  w(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : L(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function w(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e, t) {
                if ('object' != typeof e || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, t || 'default');
                  if ('object' != typeof r) return r;
                  throw new TypeError(
                    '@@toPrimitive must return a primitive value.'
                  );
                }
                return ('string' === t ? String : Number)(e);
              })(e, 'string');
              return 'symbol' == typeof t ? t : String(t);
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        let S = {},
          k = null;
        const j = function (e) {
            return new Promise(function (t, n) {
              let r = ct_localizations.dynamic_js_chunks.find(function (t) {
                return t.id === e;
              });
              if ((r || n(), S[r.id]))
                t({
                  chunk: S[r.id],
                  isInitial: !1,
                });
              else if (
                ((S[r.id] = {
                  state: 'loading',
                }),
                r.global_data &&
                  r.global_data.map(function (e) {
                    e.var && e.data && (window[e.var] = e.data);
                  }),
                r.raw_html &&
                  (document.querySelector(r.raw_html.selector) ||
                    document.body.insertAdjacentHTML(
                      'beforeend',
                      r.raw_html.html
                    )),
                r.deps)
              ) {
                const e = r.deps.filter(function (e) {
                  return !document.querySelector(
                    `script[src*="${r.deps_data[e]}"]`
                  );
                });
                e.map(function (e) {
                  return r.deps_data[e];
                });
                [...e, 'root']
                  .map(function (e) {
                    return function () {
                      return new Promise(function (n) {
                        'root' !== e
                          ? d()([r.deps_data[e]], function () {
                              n();
                            })
                          : d()([r.url], function () {
                              n(),
                                t({
                                  chunk: S[r.id],
                                  isInitial: !0,
                                });
                            });
                      });
                    };
                  })
                  .reduce(function (e, t) {
                    return e.then(function (e) {
                      return t();
                    });
                  }, Promise.resolve());
              } else
                d()(r.url, function () {
                  t({
                    chunk: S[r.id],
                    isInitial: !0,
                  });
                });
            });
          },
          P = function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null;
            const r = function () {
              S[e.id].mount &&
                (n
                  ? S[e.id].mount(n, t)
                  : [...document.querySelectorAll(e.selector)].map(function (
                      n
                    ) {
                      S[e.id].mount(n, t);
                    }));
            };
            j(e.id)
              .then(function (e) {
                let { isInitial: n } = e;
                n && r(), !n && t && r();
              })
              .catch(function (t) {
                console.error('Cannot load chunk', e.id, t);
              });
          },
          E = function () {
            ct_localizations.dynamic_js_chunks.map(function (e) {
              e.id &&
                document.querySelector(e.selector) &&
                (e.trigger
                  ? (Array.isArray(e.trigger) ? e.trigger : [e.trigger]).map(
                      function (t) {
                        'intersection-observer' !==
                        (t = t.trigger
                          ? t
                          : {
                              trigger: t,
                              selector: e.selector,
                            }).trigger
                          ? (function (e, t, n, r) {
                              (e.trigger || y[e.trigger]) &&
                                y[e.trigger](e, t, n, r);
                            })(t, e, P, S)
                          : (function (e) {
                              window.IntersectionObserver &&
                                (k ||
                                  (k = new IntersectionObserver(function (e) {
                                    e.map(function (e) {
                                      let {
                                        boundingClientRect: t,
                                        target: n,
                                        isIntersecting: r,
                                      } = e;
                                      const o = n.__chunk__;
                                      if (!r && t.y > 0) return;
                                      let i = 'target-before-bottom';
                                      !r &&
                                        t.y < 0 &&
                                        (i = 'target-after-bottom'),
                                        ('target-before-bottom' !== i ||
                                          S[o.id]) &&
                                          P(
                                            o,
                                            {
                                              state: i,
                                              target: n,
                                            },
                                            o.el
                                          );
                                    });
                                  })),
                                [...document.querySelectorAll(e.selector)].map(
                                  function (t) {
                                    if (t.ioObserving) return;
                                    t.ioObserving = !0;
                                    const n = document.querySelector(e.target);
                                    n &&
                                      ((n.__chunk__ = O(
                                        O({}, e),
                                        {},
                                        {
                                          el: t,
                                        }
                                      )),
                                      k.observe(n));
                                  }
                                ));
                            })(e);
                      }
                    )
                  : P(e, null));
            });
          },
          q = function (e, t) {
            (S[e] && 'loading' !== S[e].state) || (S[e] = t);
          },
          _ = [
            {
              els: function () {
                return [
                  ...document.querySelectorAll(
                    'header [data-device="desktop"] [data-id*="menu"] > .menu'
                  ),
                  ...document.querySelectorAll('.ct-header-account > ul'),
                ].filter(function (e) {
                  return (function (e) {
                    return (
                      e.querySelector('.menu-item-has-children') ||
                      e.querySelector('.page_item_has_children')
                    );
                  })(e);
                });
              },
              load: function () {
                return n.e(921).then(n.bind(n, 7921));
              },
              events: ['ct:header:refresh-menu-submenus'],
            },
            {
              els: function () {
                return [
                  ...document.querySelectorAll(
                    'header [data-device="desktop"] [data-id^="menu"][data-responsive]'
                  ),
                ];
              },
              load: function () {
                return n.e(68).then(n.bind(n, 9068));
              },
              condition: function () {
                return (
                  'desktop' === (0, l.C)() &&
                  [
                    ...document.querySelectorAll(
                      'header [data-device="desktop"] [data-id^="menu"][data-responsive]'
                    ),
                  ].some(function (e) {
                    if (!e.firstElementChild) return !1;
                    const t = e.firstElementChild.getBoundingClientRect(),
                      n = [
                        ...e
                          .closest('[data-row]')
                          .querySelectorAll('[data-items] > [data-id]'),
                      ]
                        .filter(function (t) {
                          return t !== e;
                        })
                        .filter(function (e) {
                          const n = e.getBoundingClientRect(),
                            r = n.left < t.left && n.right > t.left,
                            o = n.right > t.right && n.left < t.right,
                            i = n.left > t.left && n.right < t.right;
                          return r || o || i;
                        }),
                      r = e.parentElement.getBoundingClientRect(),
                      o = t.left > r.left,
                      i = t.right < r.right,
                      c = o && i && 0 === n.length;
                    return c && (e.dataset.responsive = 'yes'), !c;
                  })
                );
              },
            },
          ],
          x = [
            {
              els: function () {
                return [
                  [
                    ...document.querySelectorAll(
                      '.ct-search-form[data-live-results]'
                    ),
                  ].filter(function (e) {
                    return (
                      !e.matches(
                        '[id="search-modal"] .ct-search-form[data-live-results]'
                      ) &&
                      !e.matches(
                        '.ct-sidebar .ct-widget .woocommerce-product-search'
                      )
                    );
                  }),
                ];
              },
              load: function () {
                return n.e(897).then(n.bind(n, 6897));
              },
              mount: function (e) {
                let { mount: t, el: n } = e;
                return t(n, {});
              },
              trigger: ['input'],
            },
            {
              els: '.ct-sidebar .ct-widget .ct-search-form:not(.woocommerce-product-search)[data-live-results]',
              load: function () {
                return n.e(897).then(n.bind(n, 6897));
              },
              trigger: ['input'],
            },
            {
              els: '.ct-sidebar .ct-widget .woocommerce-product-search',
              load: function () {
                return n.e(897).then(n.bind(n, 6897));
              },
              mount: function (e) {
                let { mount: t, el: n } = e;
                return t(n, {});
              },
              trigger: ['input'],
            },
            {
              els: '[id="search-modal"] .ct-search-form[data-live-results]',
              load: function () {
                return n.e(897).then(n.bind(n, 6897));
              },
              mount: function (e) {
                let { mount: t, el: n } = e;
                return t(n, {
                  mode: 'modal',
                  perPage: 6,
                });
              },
              trigger: ['input'],
            },
          ],
          A = ['mount', 'el'];
        function C(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function T(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? C(Object(n), !0).forEach(function (t) {
                  D(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : C(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function D(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e, t) {
                if ('object' != typeof e || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, t || 'default');
                  if ('object' != typeof r) return r;
                  throw new TypeError(
                    '@@toPrimitive must return a primitive value.'
                  );
                }
                return ('string' === t ? String : Number)(e);
              })(e, 'string');
              return 'symbol' == typeof t ? t : String(t);
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function z(e, t) {
          if (null == e) return {};
          var n,
            r,
            o = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                i = Object.keys(e);
              for (r = 0; r < i.length; r++)
                (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]),
                t.indexOf(n) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (o[n] = e[n]));
          }
          return o;
        }
        const M = /apple/i.test(navigator.vendor);
        document.addEventListener('click', function (e) {
          return 0;
        });
        let I = [
          ..._,
          ...x,
          {
            els: '[data-parallax]',
            load: function () {
              return n.e(735).then(n.bind(n, 1735));
            },
            events: ['blocksy:parallax:init'],
          },
          {
            els: '.flexy-container[data-flexy*="no"]',
            load: function () {
              return n.e(597).then(n.bind(n, 7597));
            },
            events: ['ct:flexy:update'],
            trigger: ['hover-with-touch'],
          },
          {
            els: '.ct-share-box [data-network="pinterest"]',
            load: function () {
              return n.e(150).then(n.bind(n, 7150));
            },
            trigger: ['click'],
          },
          {
            els: '.ct-share-box [data-network="clipboard"]',
            load: function () {
              return n.e(150).then(n.bind(n, 7150));
            },
            trigger: ['click'],
          },
          {
            els: '.ct-media-container[data-media-id], .ct-dynamic-media[data-media-id]',
            load: function () {
              return n.e(806).then(n.bind(n, 4087));
            },
            trigger: ['click', 'slight-mousemove', 'scroll'],
          },
          {
            els: '.ct-share-box [data-network]:not([data-network="pinterest"]):not([data-network="email"]):not([data-network="clipboard"])',
            load: function () {
              return n.e(150).then(n.bind(n, 7150));
            },
            trigger: ['hover'],
            condition: function () {
              return !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
              );
            },
          },
          {
            els: [
              ...(document.querySelector('.ct-header-cart > .ct-cart-content')
                ? ['.ct-header-cart > .ct-cart-item']
                : []),
              '.ct-language-switcher > .ct-active-language',
              '.ct-header-account[data-interaction="dropdown"] > .ct-account-item',
            ],
            load: function () {
              return n.e(559).then(n.bind(n, 5559));
            },
            trigger: ['hover-with-click'],
          },
          {
            els: '.ct-back-to-top, .ct-shortcuts-bar [data-shortcut*="scroll_top"]',
            load: function () {
              return n.e(466).then(n.bind(n, 2466));
            },
            events: ['ct:back-to-top:mount'],
            trigger: ['scroll'],
          },
          {
            els: '.ct-pagination:not([data-pagination="simple"])',
            load: function () {
              return n.e(308).then(n.bind(n, 6308));
            },
            trigger: ['scroll'],
          },
          {
            els: ['.entries[data-layout]', '[data-products].products'],
            load: function () {
              return new Promise(function (e) {
                return e({
                  mount: u.Z,
                });
              });
            },
          },
          {
            els: ['.ct-modal-action'],
            load: function () {
              return new Promise(function (e) {
                return e({
                  mount: f.B,
                });
              });
            },
            events: ['ct:header:update'],
            trigger: ['click'],
          },
          {
            els: ['.ct-expandable-trigger'],
            load: function () {
              return n.e(761).then(n.bind(n, 1761));
            },
            trigger: ['click'],
          },
          {
            els: ['.ct-header-search'],
            load: function () {
              return new Promise(function (e) {
                return e({
                  mount: f.B,
                });
              });
            },
            mount: function (e) {
              let { mount: t, el: n } = e;
              t(
                n,
                T(
                  T({}, z(e, A)),
                  {},
                  {
                    focus: !0,
                  }
                )
              );
            },
            events: [],
            trigger: ['click'],
          },
        ];
        document.body.className.indexOf('woocommerce') > -1 &&
          n
            .e(623)
            .then(n.bind(n, 6623))
            .then(function (e) {
              let { wooEntryPoints: t } = e;
              (I = [...I, ...t]),
                (0, a.XT)(I, {
                  immediate: !0,
                  skipEvents: !0,
                });
            }),
          (0, a.XT)(I, {
            immediate: /comp|inter|loaded/.test(document.readyState),
          });
        const N = function () {
          [
            ...document.querySelectorAll('.ct-header-trigger'),
            ...document.querySelectorAll('.ct-offcanvas-trigger'),
          ].map(function (e) {
            e &&
              !e.hasListener &&
              ((e.hasListener = !0),
              e.addEventListener('click', function (t) {
                if ((t.preventDefault(), !e.dataset.togglePanel && !e.hash))
                  return;
                let n = document.querySelector(e.dataset.togglePanel || e.hash);
                n &&
                  (0, f.a)(t, {
                    container: n,
                    closeWhenLinkInside: !e.closest('.ct-header-cart'),
                    computeScrollContainer: function () {
                      return n.querySelector('.cart_list') &&
                        !n.querySelector('[data-id="cart"] .cart_list')
                        ? n.querySelector('.cart_list')
                        : 'mobile' === (0, l.C)() &&
                          n.querySelector(
                            '[data-device="mobile"] > .ct-panel-content-inner'
                          )
                        ? n.querySelector(
                            '[data-device="mobile"] > .ct-panel-content-inner'
                          )
                        : n.querySelector(
                            '.ct-panel-content > .ct-panel-content-inner'
                          );
                    },
                  });
              }));
          });
        };
        (0, a.Cg)(function () {
          document.body.addEventListener(
            'mouseover',
            function () {
              (0, a.Xr)(ct_localizations.dynamic_styles.lazy_load),
                n.e(418).then(n.bind(n, 5418)),
                n.e(95).then(n.bind(n, 1095)),
                n.e(815).then(n.bind(n, 2815));
              const e = document.querySelector(
                '#search-modal .ct-search-form input'
              );
              e &&
                e.value.trim().length > 0 &&
                e.dispatchEvent(
                  new Event('input', {
                    bubbles: !0,
                  })
                );
            },
            {
              once: !0,
              passive: !0,
            }
          );
          let e = [
            ...document.querySelectorAll(
              '.comment-form [class*="comment-form-field"]'
            ),
          ]
            .reduce(function (e, t) {
              return [...e, t.querySelector('input,textarea')];
            }, [])
            .filter(function (e) {
              return 'hidden' !== e.type && 'checkbox' !== e.type;
            });
          const t = function () {
            e.map(function (e) {
              e.parentNode.classList.remove('ct-not-empty'),
                e.value &&
                  e.value.trim().length > 0 &&
                  e.parentNode.classList.add('ct-not-empty');
            });
          };
          setTimeout(function () {
            t();
          }, 10),
            e.map(function (e) {
              return e.addEventListener('input', t);
            }),
            E(),
            setTimeout(function () {
              N();
            });
        });
        let B = !0;
        c().on('blocksy:frontend:init', function () {
          if (
            ((0, a.XT)(I, {
              immediate: !0,
              skipEvents: !0,
            }),
            E(),
            N(),
            B)
          )
            B = !1;
          else {
            let e = [
              {
                promise: function () {
                  return n.e(844).then(n.bind(n, 844));
                },
                check: function () {
                  return !0;
                },
              },
              {
                promise: function () {
                  return n.e(530).then(n.bind(n, 3530));
                },
                check: function () {
                  return !!window.gsInitTabs;
                },
              },
              {
                promise: function () {
                  return n.e(188).then(n.bind(n, 8188));
                },
                check: function () {
                  return !!window.wpcf7;
                },
              },
              {
                promise: function () {
                  return n.e(629).then(n.bind(n, 3629));
                },
                check: function () {
                  return !!window.turnstile;
                },
              },
              {
                promise: function () {
                  return n.e(140).then(n.bind(n, 6140));
                },
                check: function () {
                  return !!window.elementorFrontend;
                },
              },
            ];
            Promise.all(
              e
                .filter(function (e) {
                  let { check: t } = e;
                  return t();
                })
                .map(function (e) {
                  let { promise: t } = e;
                  return t();
                })
            ).then(function (e) {
              e.map(function (e) {
                let { mount: t } = e;
                return t();
              });
            });
          }
        }),
          c().on('ct:overlay:handle-click', function (e) {
            let { e: t, href: n, container: r, options: o = {} } = e;
            (0, f.a)(
              t,
              T(
                T(
                  T(
                    {},
                    n
                      ? {
                          container: document.querySelector(n),
                        }
                      : {}
                  ),
                  r
                    ? {
                        container: r,
                      }
                    : {}
                ),
                o
              )
            );
          });
      },
      989: function (e, t, n) {
        n.p = ct_localizations.public_url;
      },
      5277: function (e, t, n) {
        var r, o, i;
        /*!
         * $script.js JS loader & dependency manager
         * https://github.com/ded/script.js
         * (c) Dustin Diaz 2014 | License MIT
         */
        (i = function () {
          var e,
            t,
            n = document,
            r = n.getElementsByTagName('head')[0],
            o = !1,
            i = 'push',
            c = 'readyState',
            u = 'onreadystatechange',
            a = {},
            l = {},
            s = {},
            d = {};
          function f(e, t) {
            for (var n = 0, r = e.length; n < r; ++n) if (!t(e[n])) return o;
            return 1;
          }
          function m(e, t) {
            f(e, function (e) {
              return t(e), 1;
            });
          }
          function p(t, n, r) {
            t = t[i] ? t : [t];
            var o = n && n.call,
              c = o ? n : r,
              u = o ? t.join('') : n,
              h = t.length;
            function b(e) {
              return e.call ? e() : a[e];
            }
            function g() {
              if (!--h)
                for (var e in ((a[u] = 1), c && c(), s))
                  f(e.split('|'), b) && !m(s[e], b) && (s[e] = []);
            }
            return (
              setTimeout(function () {
                m(t, function t(n, r) {
                  return null === n
                    ? g()
                    : (r ||
                        /^https?:\/\//.test(n) ||
                        !e ||
                        (n = -1 === n.indexOf('.js') ? e + n + '.js' : e + n),
                      d[n]
                        ? (u && (l[u] = 1),
                          2 == d[n]
                            ? g()
                            : setTimeout(function () {
                                t(n, !0);
                              }, 0))
                        : ((d[n] = 1), u && (l[u] = 1), void v(n, g)));
                });
              }, 0),
              p
            );
          }
          function v(e, o) {
            var i,
              a = n.createElement('script');
            (a.onload =
              a.onerror =
              a[u] =
                function () {
                  (a[c] && !/^c|loade/.test(a[c])) ||
                    i ||
                    ((a.onload = a[u] = null), (i = 1), (d[e] = 2), o());
                }),
              (a.async = 1),
              (a.src = t ? e + (-1 === e.indexOf('?') ? '?' : '&') + t : e),
              r.insertBefore(a, r.lastChild);
          }
          return (
            (p.get = v),
            (p.order = function (e, t, n) {
              !(function r(o) {
                (o = e.shift()), e.length ? p(o, r) : p(o, t, n);
              })();
            }),
            (p.path = function (t) {
              e = t;
            }),
            (p.urlArgs = function (e) {
              t = e;
            }),
            (p.ready = function (e, t, n) {
              e = e[i] ? e : [e];
              var r,
                o = [];
              return (
                !m(e, function (e) {
                  a[e] || o[i](e);
                }) &&
                f(e, function (e) {
                  return a[e];
                })
                  ? t()
                  : ((r = e.join('|')),
                    (s[r] = s[r] || []),
                    s[r][i](t),
                    n && n(o)),
                p
              );
            }),
            (p.done = function (e) {
              p([null], e);
            }),
            p
          );
        }),
          e.exports
            ? (e.exports = i())
            : void 0 ===
                (o = 'function' == typeof (r = i) ? r.call(t, n, t, e) : r) ||
              (e.exports = o);
      },
      1601: function (e) {
        'use strict';
        e.exports = self.ctEvents;
      },
      2194: function (e) {
        'use strict';
        e.exports = self.jQuery;
      },
    },
    r = {};
  function o(e) {
    var t = r[e];
    if (void 0 !== t) return t.exports;
    var i = (r[e] = {
      exports: {},
    });
    return n[e].call(i.exports, i, i.exports, o), i.exports;
  }
  (o.m = n),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return (
        o.d(t, {
          a: t,
        }),
        t
      );
    }),
    (o.d = function (e, t) {
      for (var n in t)
        o.o(t, n) &&
          !o.o(e, n) &&
          Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n],
          });
    }),
    (o.f = {}),
    (o.e = function (e) {
      return Promise.all(
        Object.keys(o.f).reduce(function (t, n) {
          return o.f[n](e, t), t;
        }, [])
      );
    }),
    (o.u = function (e) {
      return (
        e +
        '.' +
        {
          36: 'd171c773eabf61d571ec',
          68: '88f643c8b4c9266a5fc7',
          87: '5261f73b19f854b5da13',
          95: '9b58e560812076065644',
          140: 'db33f963fd93dcb7d8b3',
          142: '35a89b8a21c3144c67c3',
          150: '31676c442d5df50d88e0',
          188: 'd08fca2a6119d5ab1c6f',
          308: '3b4fec03f4400279d96f',
          316: '15a1d45e8c38b53321d5',
          321: '52e4ea3fa624a2c496ca',
          418: '66ea70734eb9e0d6ad3f',
          421: '8731543025e84f834ebe',
          466: '4a5b6dd53c51340fc87b',
          530: '57559c614b691c1eae49',
          559: '47054edb739c3c6a4a49',
          574: '3dfefc4d7c283ef02e53',
          597: '389a17efe0996840706d',
          623: 'dc144db541bbc1376e09',
          629: '370ffe8380bb23e4593b',
          735: '8f08a3d5ecc141604290',
          760: '948eafe55e2ef118455b',
          761: 'ee61052e9deb5e10792a',
          798: 'ecb27ed45aceb4c21eb9',
          806: 'a5fd92a7495a9c9c791d',
          815: 'cc102d9136543dd50d70',
          844: '76ff4bdad9728c9e2e60',
          897: 'c1365759444a96d0539f',
          921: 'ea5565c86a4be1f7d88d',
        }[e] +
        '.js'
      );
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (e = {}),
    (t = 'ctFrontend:'),
    (o.l = function (n, r, i, c) {
      if (e[n]) e[n].push(r);
      else {
        var u, a;
        if (void 0 !== i)
          for (
            var l = document.getElementsByTagName('script'), s = 0;
            s < l.length;
            s++
          ) {
            var d = l[s];
            if (
              d.getAttribute('src') == n ||
              d.getAttribute('data-webpack') == t + i
            ) {
              u = d;
              break;
            }
          }
        u ||
          ((a = !0),
          ((u = document.createElement('script')).charset = 'utf-8'),
          (u.timeout = 120),
          o.nc && u.setAttribute('nonce', o.nc),
          u.setAttribute('data-webpack', t + i),
          (u.src = n)),
          (e[n] = [r]);
        var f = function (t, r) {
            (u.onerror = u.onload = null), clearTimeout(m);
            var o = e[n];
            if (
              (delete e[n],
              u.parentNode && u.parentNode.removeChild(u),
              o &&
                o.forEach(function (e) {
                  return e(r);
                }),
              t)
            )
              return t(r);
          },
          m = setTimeout(
            f.bind(null, void 0, {
              type: 'timeout',
              target: u,
            }),
            12e4
          );
        (u.onerror = f.bind(null, u.onerror)),
          (u.onload = f.bind(null, u.onload)),
          a && document.head.appendChild(u);
      }
    }),
    (o.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: 'Module',
        }),
        Object.defineProperty(e, '__esModule', {
          value: !0,
        });
    }),
    (o.p = ''),
    (function () {
      var e = {
        179: 0,
      };
      o.f.j = function (t, n) {
        var r = o.o(e, t) ? e[t] : void 0;
        if (0 !== r)
          if (r) n.push(r[2]);
          else {
            var i = new Promise(function (n, o) {
              r = e[t] = [n, o];
            });
            n.push((r[2] = i));
            var c = o.p + o.u(t),
              u = new Error();
            o.l(
              c,
              function (n) {
                if (o.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                  var i = n && ('load' === n.type ? 'missing' : n.type),
                    c = n && n.target && n.target.src;
                  (u.message =
                    'Loading chunk ' + t + ' failed.\n(' + i + ': ' + c + ')'),
                    (u.name = 'ChunkLoadError'),
                    (u.type = i),
                    (u.request = c),
                    r[1](u);
                }
              },
              'chunk-' + t,
              t
            );
          }
      };
      var t = function (t, n) {
          var r,
            i,
            c = n[0],
            u = n[1],
            a = n[2],
            l = 0;
          if (
            c.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (r in u) o.o(u, r) && (o.m[r] = u[r]);
            if (a) a(o);
          }
          for (t && t(n); l < c.length; l++)
            (i = c[l]), o.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
        },
        n = (self.blocksyJsonP = self.blocksyJsonP || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var i = o(1229);
  self.ctFrontend = i;
})();
