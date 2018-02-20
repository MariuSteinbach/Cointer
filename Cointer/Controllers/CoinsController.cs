using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Cointer.Data;
using Cointer.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;

namespace Cointer.Controllers
{
    [Authorize]
    public class CoinsController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;

        public CoinsController(ApplicationDbContext context,
                                UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        // GET: Coins
        public async Task<IActionResult> Index()
        {
            return View(await _context.Coin.Where(c => c.OwnerID == _userManager.GetUserId(User)).ToListAsync());
        }

        // Get: api/coins
        [Route("api/coins")]
        [Produces("application/json")]
        [AllowAnonymous]
        public async Task<IActionResult> ApiIndex()
        {
            return Ok(await _context.Coin.Where(c => c.OwnerID == _userManager.GetUserId(User)).ToListAsync());
        }

        // GET: Coins/Details/5
        public async Task<IActionResult> Details(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var coin = await _context.Coin
                .SingleOrDefaultAsync(m => m.CoinID == id);
            if (coin == null)
            {
                return NotFound();
            }

            return View(coin);
        }

        // GET: Coins/Create
        public IActionResult Create()
        {
            ViewData["Values"] = new SelectList(_context.Value, "ValueID", "Name");
            return View();
        }

        // POST: Coins/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(Coin coin)
        {
            if (ModelState.IsValid)
            {
                coin.OwnerID = _userManager.GetUserId(User);
                coin.Added = DateTime.Now;
                _context.Add(coin);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(coin);
        }

        [HttpPost]
        [Route("api/coins/create")]
        public async Task<IActionResult> ApiCreate([FromBody]Coin coin)
        {
            if(ModelState.IsValid)
            {
                coin.OwnerID = HttpContext.User.Claims.First().Value;
                coin.Added = DateTime.Now;
                _context.Add(coin);
                await _context.SaveChangesAsync();
                return Ok(coin);
            }
            return BadRequest();
        }

        // GET: Coins/Edit/5
        public async Task<IActionResult> Edit(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var coin = await _context.Coin.SingleOrDefaultAsync(m => m.CoinID == id);
            if (coin == null)
            {
                return NotFound();
            }
            return View(coin);
        }

        // POST: Coins/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(string id, [Bind("CoinID,Value,Added")] Coin coin)
        {
            if (id != coin.CoinID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(coin);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!CoinExists(coin.CoinID))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(coin);
        }

        // GET: Coins/Delete/5
        public async Task<IActionResult> Delete(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var coin = await _context.Coin
                .SingleOrDefaultAsync(m => m.CoinID == id);
            if (coin == null)
            {
                return NotFound();
            }

            return View(coin);
        }

        // POST: Coins/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(string id)
        {
            var coin = await _context.Coin.SingleOrDefaultAsync(m => m.CoinID == id);
            _context.Coin.Remove(coin);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool CoinExists(string id)
        {
            return _context.Coin.Any(e => e.CoinID == id);
        }
    }
}
